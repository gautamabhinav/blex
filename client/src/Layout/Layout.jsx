// import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import { AiFillCloseCircle } from "react-icons/ai";
// import Footer from "../Components/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../Redux/authSlice";

// const Layout = ({ children }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // for checking user logged in or not
//   const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

//   // for dispaying the options, according to user role
//   const role = useSelector((state) => state?.auth?.role);

//   // function to hide the drawer on close button click
//   const hideDrawer = () => {
//     const element = document.getElementsByClassName("drawer-toggle");
//     element[0].checked = false;

//     // collapsing the drawer-side width to zero
//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = 0;
//   };

//   // function for changing the drawer width on menu button click
//   const changeWidth = () => {
//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "auto";
//   };

//   // function to handle logout
//   const handleLogout = async (event) => {
//     event.preventDefault();

//     // calling logout action
//     const res = await dispatch(logout());

//     // redirect to home page if true
//     if (res?.payload?.success) navigate("/");
//   };

//   return (
//     <div className="min-h-[90vh]">
//       {/* adding the daisy ui drawer */}
//       <div className="drawer absolute z-50 left-0 w-fit">
//         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content">
//           <label htmlFor="my-drawer" className="cursor-pointer relative">
//             <FiMenu
//               onClick={changeWidth}
//               size={"32px"}
//               className="font-bold text-white m-4"
//             />
//           </label>
//         </div>

//         <div className="drawer-side w-0">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
//             {/* close button for drawer */}
//             <li className="w-fit absolute right-2 z-50">
//               <button onClick={hideDrawer}>
//                 <AiFillCloseCircle size={24} />
//               </button>
//             </li>

//             <li>
//               <Link to={"/"}>Home</Link>
//             </li>

//             {/* displaying dashboard, if user is logged in */}
//             {isLoggedIn && role === "ADMIN" && (
//               <li>
//                 <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
//               </li>
//             )}

//             <li>
//               <Link to={"/courses"}>All Courses</Link>
//             </li>

//             <li>
//               <Link to={"/contact"}>Contact Us</Link>
//             </li>

//             <li>
//               <Link to={"/about"}>About Us</Link>
//             </li>

//             {/* creating the bottom part of drawer */}
//             {/* if user is not logged in */}
//             {!isLoggedIn && (
//               <li className="absolute bottom-4 w-[90%]">
//                 <div className="w-full flex items-center justify-center">
//                   <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link to={"/login"}>Login</Link>
//                   </button>
//                   <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link to={"/signup"}>Signup</Link>
//                   </button>
//                 </div>
//               </li>
//             )}

//             {/* if user is logged in */}
//             {isLoggedIn && (
//               <li className="absolute bottom-4 w-[90%]">
//                 <div className="w-full flex items-center justify-center">
//                   <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link to={"/user/profile"}>Profile</Link>
//                   </button>
//                   <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link onClick={handleLogout}>Logout</Link>
//                   </button>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>

//       {children}

//       {/* adding the footer content */}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;



import React, { useState, useEffect, useRef } from "react";
import { FiHome, FiBook, FiPhone, FiInfo, FiUser, FiFileText } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineLogout, AiOutlineSearch } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaChartSimple } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { fetchNotifications, markNotificationRead } from '../Redux/notificationSlice';
import { connectSocket, disconnectSocket } from '../Redux/socketSlice';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  // auth slice historically used `data` as the user object; support both shapes
  const user = useSelector((state) => state?.auth?.data || state?.auth?.user) || {};

  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      // fall back to system preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    } catch (e) {
      // ignore
    }
    return "light"; // default to light for broader compatibility
  });

  const firstLinkRef = useRef(null);
  const searchRef = useRef(null);
  const notifications = useSelector((state) => state?.notifications) || { list: [], unreadCount: 0 };
  const socket = useSelector((state) => state?.socket?.socket);

  useEffect(() => {
    // initialize theme and persist
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
      localStorage.setItem("theme", theme);
      // set meta color-scheme for some browsers
      const meta = document.querySelector('meta[name="color-scheme"]') || document.createElement('meta');
      meta.name = 'color-scheme';
      meta.content = theme === 'dark' ? 'dark light' : 'light dark';
      if (!document.head.contains(meta)) document.head.appendChild(meta);
    } catch (err) {
      console.warn('Theme init failed', err);
    }
  }, [theme]);

  useEffect(() => {
    // load notifications and (re)connect socket for logged-in users
    if (isLoggedIn) {
      dispatch(fetchNotifications());
      dispatch(connectSocket());
    } else {
      dispatch(disconnectSocket());
    }

    // keyboard shortcut: '/' focuses search
    const handler = (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setShowUserMenu(false);
        setShowNotif(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isLoggedIn]);

  // listen for real-time incoming notifications
  useEffect(() => {
    if (!socket) return;
    const onNew = (payload) => {
      // refresh notifications list when a new notification arrives
      dispatch(fetchNotifications());
      try { toast.success("New notification"); } catch (e) { /* ignore */ }
    };
    socket.on("newNotification", onNew);
    return () => {
      socket.off("newNotification", onNew);
    };
  }, [socket]);

  useEffect(() => {
    if (isOpen) {
      // focus first link for keyboard users
      setTimeout(() => firstLinkRef.current?.focus(), 150);
      // prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleLogout = async (event) => {
    event.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) navigate("/");
  };

  // const menuLinks = [
  //   { name: "Home", path: "/", icon: <FiHome />, desc: "Return to homepage" },
  //   ...(isLoggedIn && role === "ADMIN"
  //     ? [{ name: "Admin Dashboard", path: "/admin/dashboard", icon: <FiUser />, desc: "Manage site content" }]
  //     : []),
  //   { name: "All Blogs", path: "/blogs", icon: <FiBook />, desc: "Explore all posts" },
  //   { name: "All Blogs", path: "/blogs", icon: <FiBook />, desc: "Explore all posts" },
  //   { name: "User Dashboard", path: "/user/dashboard", icon: <FiBook />, desc: "User Dashboard" },
  //   { name: "Contact Us", path: "/contact", icon: <FiPhone />, desc: "Get in touch" },
  //   { name: "About Us", path: "/about", icon: <FiInfo />, desc: "Learn about the project" },
  // ];



  const menuLinks = [
  { name: "Home", path: "/", icon: <FiHome />, desc: "Return to homepage" },
  ...(isLoggedIn && ( role === "ADMIN" ||  role === "SUPERADMIN")
    ? [
        {
          name: "Admin Dashboard",
          path: "/admin/dashboard",
          icon: <FiUser />,
          desc: "Manage site content",
        },
        // {
        //   name: "Excel Manager",
        //   path: "/excel",
        //   icon: <FiFileText />, // or FiDatabase / FiUpload
        //   desc: "Upload & manage Excel files",
        // },
      ]
    : []),
  { name: "All Blogs", path: "/blogs", icon: <FiBook />, desc: "Explore all posts" },
  {
          name: "Excel Manager",
          path: "/excel",
          icon: <FiFileText />, // or FiDatabase / FiUpload
          desc: "Upload & manage Excel files",
        },

  { name: "User Dashboard", path: "/user/dashboard", icon: <FiBook />, desc: "User Dashboard" },
  { name: "Contact Us", path: "/contact", icon: <FiPhone />, desc: "Get in touch" },
  { name: "About Us", path: "/about", icon: <FiInfo />, desc: "Learn about the project" },
];


  const submitSearch = (e) => {
    e?.preventDefault?.();
    if (!query.trim()) {
      navigate("/blogs");
      return;
    }
    navigate(`/blogs?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 md:p-4 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-3">
          {/* Animated hamburger button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className="relative w-10 h-10 flex items-center justify-center"
          >
            <span
              className={`block absolute w-6 h-0.5 bg-white transform transition duration-300 ${isOpen ? "rotate-45" : "-translate-y-2.5"}`}
            />
            <span className={`block absolute w-6 h-0.5 bg-white transition duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span
              className={`block absolute w-6 h-0.5 bg-white transform transition duration-300 ${isOpen ? "-rotate-45" : "translate-y-2.5"}`}
            />
          </button>

          <Link to="/" className="text-lg font-bold tracking-wide hover:opacity-90">
            XlBlog
          </Link>
        </div>

        {/* search - visible on md+ */}
        <form onSubmit={submitSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <AiOutlineSearch className="absolute left-3 top-3 text-gray-300" />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blogs, authors... (press / to focus)"
              className="pl-10 pr-4 py-2 w-full rounded-full bg-white/10 placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">Search</button>
        </form>

        <div className="flex items-center gap-3">
          <button onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition" title="Toggle theme">
            {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>

          {/* Notification dropdown */}
          <div className="relative">
            <button onClick={() => setShowNotif((s) => !s)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition relative" title="Notifications">
              🔔
              {notifications?.unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">{notifications.unreadCount}</span>
              )}
            </button>

            {showNotif && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 text-gray-800 p-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Notifications</div>
                  <button className="text-sm text-gray-500" onClick={() => dispatch(fetchNotifications())}>Refresh</button>
                </div>
                <div className="max-h-64 overflow-auto">
                  {notifications?.list?.length === 0 ? (
                    <div className="p-3 text-sm text-gray-500">No notifications</div>
                  ) : (
                    notifications.list.map((n) => (
                      <div key={n._id} className={`p-2 rounded hover:bg-gray-100 flex items-start gap-2 ${((n.readBy||[]).some(r=>String(r.user)===String(user?._id||user?.id))) ? 'opacity-70' : ''}`}>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{n.title}</div>
                          <div className="text-xs text-gray-600">{n.message}</div>
                          <div className="text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          {!((n.readBy||[]).some(r=>String(r.user)===String(user?._id||user?.id))) && (
                            <button onClick={() => dispatch(markNotificationRead(n._id))} className="text-xs text-blue-600">Mark read</button>
                          )}
                          {n.link && <a href={n.link} className="text-xs text-yellow-500">Open</a>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* user avatar / menu */}
          <div className="relative">
            {isLoggedIn ? (
              <button onClick={() => setShowUserMenu((s) => !s)} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">{(user?.name || user?.email || "U").charAt(0).toUpperCase()}</div>
                <span className="hidden md:inline">{user?.name || (user?.email || "").split("@")[0]}</span>
              </button>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link to="/login" className="px-3 py-1 rounded-md bg-indigo-700 hover:bg-indigo-800">Login</Link>
                <Link to="/signup" className="px-3 py-1 rounded-md bg-purple-700 hover:bg-purple-800">Signup</Link>
              </div>
            )}

            {showUserMenu && (
              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg text-gray-800 py-2 overflow-hidden z-50">
                <Link to="/user/profile" onClick={() => setShowUserMenu(false)} className="block px-3 py-2 hover:bg-gray-100">Profile</Link>
                {role === "ADMIN" && <Link to="/admin/dashboard" onClick={() => setShowUserMenu(false)} className="block px-3 py-2 hover:bg-gray-100">Admin</Link>}
                <button onClick={(e) => { handleLogout(e); setShowUserMenu(false); }} className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center gap-2"><AiOutlineLogout /> Logout</button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar + Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-40" />

            <motion.aside initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} transition={{ type: "spring", stiffness: 120 }} className="fixed top-0 left-0 w-72 h-full bg-white/98 backdrop-blur-xl shadow-2xl z-50 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">✕</button>
              </div>

              <nav className="flex-1 overflow-auto">
                <ul className="space-y-3">
                  {menuLinks.map((item, idx) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        ref={idx === 0 ? firstLinkRef : null}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${location.pathname === item.path ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" : "hover:bg-gray-100"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="text-xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom buttons */}
              <div className="mt-6">
                {!isLoggedIn ? (
                  <div className="flex flex-col gap-3">
                    <Link to="/login" onClick={() => setIsOpen(false)} className="w-full py-2 text-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Login</Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full py-2 text-center rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">Signup</Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link to="/user/profile" onClick={() => setIsOpen(false)} className="w-full py-2 text-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Profile</Link>
                    <button onClick={(e) => { handleLogout(e); setIsOpen(false); }} className="w-full py-2 flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"><AiOutlineLogout /> Logout</button>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1"> {children} </main>

      <Footer />
      {/* global toast container */}
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
