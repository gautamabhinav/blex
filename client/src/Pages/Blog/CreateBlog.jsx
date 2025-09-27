// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Layout from "../../Layout/Layout";
// // import { createNewCourse, updateCourse } from "../../Redux/courseSlice";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { createNewBlog, updateBlog } from "../../Redux/blogSlice";

// const CreateBlog = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // for getting the data from location of previous component
//   const locationState = useLocation().state || {};
//   const initialBlogData = locationState.initialBlogData || { newBlog: true };

//   // for toggling disable of image input box
//   const [isDisabled, setIsDisabled] = useState(!initialBlogData?.newBlog);

//   // for storing the user input
//   const [userInput, setUserInput] = useState({
//     title: initialBlogData?.title || "",
//     author: initialBlogData?.author || "",
//     category: initialBlogData?.category || "",
//     createdBy: initialBlogData?.createdBy || "",
//     description: initialBlogData?.description || "",
//     content: initialBlogData?.content || "",
//     thumbnail: initialBlogData?.thumbnail || null,
//     previewImage:
//       initialBlogData?.thumbnail?.secure_url ||
//       initialBlogData?.previewImage ||
//       "",
//   });

//   // function to handle the image upload
//   const getImage = (event) => {
//     event.preventDefault();
//     // getting the image
//     const uploadedImage = event.target.files[0];
//     // console.log(uploadedImage);

//     // if image exists then getting the url link of it
//     if (uploadedImage) {
//       // setUserInput({ ...userInput, thumbnail: uploadedImage });
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(uploadedImage);
//       fileReader.addEventListener("load", function () {
//         setUserInput({
//           ...userInput,
//           previewImage: this.result,
//           thumbnail: uploadedImage,
//         });
//       });
//     }
//   };

//   // function to handle user input
//   const handleUserInput = (event) => {
//     const { name, value } = event.target;
//     setUserInput({
//       ...userInput,
//       [name]: value,
//     });
//   };

//   // function to handle form submission
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     let res = undefined;

//     // for creating a new course
//     if (initialBlogData.newBlog) {
//       //   checking for the empty fields
//       // console.log(userInput);
//       if (
//         !userInput.title ||
//         !userInput.category ||
//         !userInput.createdBy ||
//         !userInput.description ||
//         !userInput.thumbnail ||
//         !userInput.content ||
//         !userInput.author
//       ) {
//         toast.error("All fields are mandatory");
//         return;
//       }

//       // calling the api
//       res = await dispatch(createNewBlog(userInput));
//     }
//     // for updating an existing blog
//     else {
//       //   checking for the empty fields
//       if (
//         !userInput.title ||
//         !userInput.category ||
//         !userInput.createdBy ||
//         !userInput.description ||
//         // !userInput.thumbnail ||
//         !userInput.content ||
//         !userInput.author
//       ) {
//         toast.error("All fields are mandatory");
//         return;
//       }

//       const data = { ...userInput, id: initialBlogData._id };
//       // calling the api
//       res = await dispatch(updateBlog(data));
//     }

//     // clearing the input fields when the async thunk fulfilled successfully
//     if (res && res.meta?.requestStatus === "fulfilled" && res.payload?.success) {
//       setUserInput({
//         title: "",
//         author: "",
//         category: "",
//         content: "",
//         createdBy: "",
//         description: "",
//         thumbnail: undefined,
//         // thumbnail: null,
//         previewImage: "",
//       });

//       setIsDisabled(false);

//       // redirecting the user to admin dashboard
//       navigate("/admin/dashboard");
//     }
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center h-[100vh]">
//         {/* card for creating the new card */}
//         <form
//           onSubmit={handleFormSubmit}
//           className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] h-[450px] my-10 shadow-[0_0_10px_black] relative"
//         >
//           <Link
//             to={"/admin/dashboard"}
//             className="absolute top-8 text-2xl link text-accent cursor-pointer"
//           >
//             <AiOutlineArrowLeft />
//           </Link>

//           <h1 className="text-center text-2xl font-bold">
//             {!initialBlogData.newBlog ? "Update" : "Create new"}{" "}
//             <span>Blog</span>
//           </h1>

//           <main className="grid grid-cols-2 gap-x-10">
//             {/* for blog basic details */}
//             <div className="space-y-6">
//               <div
//                 onClick={() =>
//                   !initialBlogData.newBlog
//                     ? toast.error("Cannot update thumbnail image")
//                     : ""
//                 }
//               > </div>
//               {/* input for image file */}
//               <label className="cursor-pointer" htmlFor="image_uploads">
//                 {userInput.previewImage ? (
//                   <img
//                     className="w-full h-44 m-auto border"
//                     src={userInput.previewImage}
//                     alt="preview image"
//                   />
//                 ) : (
//                   <div className="w-full h-44 m-auto flex items-center justify-center border">
//                     <h1 className="font-bold text-lg">
//                       Upload your blog thumbnail
//                     </h1>
//                   </div>
//                 )}
//               </label>
//               <input
//                 onChange={getImage}
//                 className="hidden"
//                 type="file"
//                 id="image_uploads"
//                 name="image_uploads"
//                 accept=".jpg, .jpeg, .png"
//                 disabled={isDisabled}
//               />
//               {/* </div> */}

//               {/* adding the title section */}
//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="title">
//                   Blog Title
//                 </label>
//                 <input
//                   required
//                   type="name"
//                   name="title"
//                   id="title"
//                   placeholder="Enter the course title"
//                   className="bg-transparent px-2 py-1 border"
//                   value={userInput.title}
//                   onChange={handleUserInput}
//                 />
//               </div>
//             </div>

//             {/* for blog description and go to profile button */}

//             {/* adding the blog description */}
//             <div className="flex flex-col gap-1">
//               {/* adding the createdBy */}
//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="createdBy">
//                   CreatedBy
//                 </label>
//                 <input
//                   required
//                   type="name"
//                   name="createdBy"
//                   id="createdBy"
//                   placeholder="Enter the instructure name"
//                   className="bg-transparent px-2 py-1 border"
//                   value={userInput.createdBy}
//                   onChange={handleUserInput}
//                 />
//               </div>

//               {/* adding the category */}
//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="category">
//                   Blog Category
//                 </label>
//                 <input
//                   required
//                   type="name"
//                   name="category"
//                   id="category"
//                   placeholder="Enter the category name"
//                   className="bg-transparent px-2 py-1 border"
//                   value={userInput.category}
//                   onChange={handleUserInput}
//                 />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="description">
//                   Blog Description
//                 </label>
//                 <textarea
//                   required
//                   type="text"
//                   name="description"
//                   id="description"
//                   placeholder="Enter the blog description"
//                   className="bg-transparent px-2 py-1 border h-24 overflow-y-scroll resize-none"
//                   value={userInput.description}
//                   onChange={handleUserInput}
//                 />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="content">
//                   Content
//                 </label>
//                 <textarea
//                   required
//                   type="text"
//                   name="content"
//                   id="content"
//                   placeholder="Enter the content"
//                   className="bg-transparent px-2 py-1 border h-24 overflow-y-scroll resize-none"
//                   value={userInput.content}
//                   onChange={handleUserInput}
//                 />
//               </div>

//               {/* NEW: Author input so author isn't undefined */}
//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="author">
//                   Author
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="author"
//                   id="author"
//                   placeholder="Enter the author name"
//                   className="bg-transparent px-2 py-1 border"
//                   value={userInput.author}
//                   onChange={handleUserInput}
//                 />
//               </div>
//             </div>
//           </main>

//           <button
//             className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
//             type="submit"
//           >
//             {!initialBlogData.newBlog ? "Update Blog" : "Create Blog"}
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default CreateBlog;


///////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Layout from "../../Layout/Layout";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { createNewBlog, updateBlog } from "../../Redux/blogSlice";
// import { getAllCategories } from "../../Redux/categorySlice"; // ✅ Example slice to fetch categories

// const CreateBlog = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const locationState = useLocation().state || {};
//   const initialBlogData = locationState.initialBlogData || { newBlog: true };

//   const [isDisabled, setIsDisabled] = useState(!initialBlogData?.newBlog);

//   // Fetch categories from Redux (assume categories = [{ _id, name }])
//   const { categories = [] } = useSelector((state) => state.category || {});

//   useEffect(() => {
//     dispatch(getAllCategories());
//   }, [dispatch]);

//   // Normalize category: ensure we always store the category ID
//   const initialCategoryId =
//     typeof initialBlogData?.category === "object"
//       ? initialBlogData?.category?._id
//       : initialBlogData?.category || "";

//   const [userInput, setUserInput] = useState({
//     title: initialBlogData?.title || "",
//     author: initialBlogData?.author || "",
//     category: initialCategoryId,
//     createdBy: initialBlogData?.createdBy || "",
//     description: initialBlogData?.description || "",
//     content: initialBlogData?.content || "",
//     thumbnail: initialBlogData?.thumbnail || null,
//     previewImage:
//       initialBlogData?.thumbnail?.secure_url ||
//       initialBlogData?.previewImage ||
//       "",
//   });

//   const getImage = (event) => {
//     const uploadedImage = event.target.files[0];
//     if (uploadedImage) {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(uploadedImage);
//       fileReader.addEventListener("load", function () {
//         setUserInput({
//           ...userInput,
//           previewImage: this.result,
//           thumbnail: uploadedImage,
//         });
//       });
//     }
//   };

//   const handleUserInput = (event) => {
//     const { name, value } = event.target;
//     setUserInput({ ...userInput, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     let res;
//     const payload = { ...userInput };

//     if (initialBlogData.newBlog) {
//       if (
//         !payload.title ||
//         !payload.category ||
//         !payload.createdBy ||
//         !payload.description ||
//         !payload.thumbnail ||
//         !payload.content ||
//         !payload.author
//       ) {
//         toast.error("All fields are mandatory");
//         return;
//       }
//       res = await dispatch(createNewBlog(payload));
//     } else {
//       if (
//         !payload.title ||
//         !payload.category ||
//         !payload.createdBy ||
//         !payload.description ||
//         !payload.content ||
//         !payload.author
//       ) {
//         toast.error("All fields are mandatory");
//         return;
//       }
//       res = await dispatch(updateBlog({ ...payload, id: initialBlogData._id }));
//     }

//     if (res && res.meta?.requestStatus === "fulfilled" && res.payload?.success) {
//       setUserInput({
//         title: "",
//         author: "",
//         category: "",
//         content: "",
//         createdBy: "",
//         description: "",
//         thumbnail: null,
//         previewImage: "",
//       });
//       setIsDisabled(false);
//       navigate("/admin/dashboard");
//     }
//   };

//   return (
//     <Layout>
//       <div className="flex items-center justify-center min-h-[100vh]">
//         <form
//           onSubmit={handleFormSubmit}
//           className="flex flex-col justify-center gap-5 rounded-lg p-6 text-white w-[700px] shadow-[0_0_10px_black] relative bg-zinc-900"
//         >
//           <Link
//             to={"/admin/dashboard"}
//             className="absolute top-6 text-2xl link text-accent cursor-pointer"
//           >
//             <AiOutlineArrowLeft />
//           </Link>

//           <h1 className="text-center text-2xl font-bold">
//             {!initialBlogData.newBlog ? "Update" : "Create new"} Blog
//           </h1>

//           <main className="grid grid-cols-2 gap-x-10">
//             {/* Left column */}
//             <div className="space-y-6">
//               <label className="cursor-pointer" htmlFor="image_uploads">
//                 {userInput.previewImage ? (
//                   <img
//                     className="w-full h-44 object-cover border rounded"
//                     src={userInput.previewImage}
//                     alt="preview"
//                   />
//                 ) : (
//                   <div className="w-full h-44 flex items-center justify-center border rounded">
//                     <h1 className="font-bold text-lg">Upload Blog Thumbnail</h1>
//                   </div>
//                 )}
//               </label>
//               <input
//                 onChange={getImage}
//                 className="hidden"
//                 type="file"
//                 id="image_uploads"
//                 name="image_uploads"
//                 accept=".jpg, .jpeg, .png"
//                 disabled={isDisabled}
//               />

//               <div className="flex flex-col gap-1">
//                 <label className="text-lg font-semibold" htmlFor="title">
//                   Blog Title
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="title"
//                   id="title"
//                   placeholder="Enter blog title"
//                   className="bg-transparent px-2 py-1 border rounded"
//                   value={userInput.title}
//                   onChange={handleUserInput}
//                 />
//               </div>
//             </div>

//             {/* Right column */}
//             <div className="flex flex-col gap-3">
//               <label className="text-lg font-semibold" htmlFor="createdBy">
//                 Created By
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="createdBy"
//                 id="createdBy"
//                 placeholder="Enter creator name"
//                 className="bg-transparent px-2 py-1 border rounded"
//                 value={userInput.createdBy}
//                 onChange={handleUserInput}
//               />

//               <label className="text-lg font-semibold" htmlFor="category">
//                 Blog Category
//               </label>
//               <select
//                 required
//                 name="category"
//                 id="category"
//                 className="bg-transparent px-2 py-1 border rounded"
//                 value={userInput.category}
//                 onChange={handleUserInput}
//               >
//                 <option value="" disabled>
//                   Select category
//                 </option>
//                 {categories.map((cat) => (
//                   <option key={cat._id} value={cat._id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>

//               <label className="text-lg font-semibold" htmlFor="description">
//                 Blog Description
//               </label>
//               <textarea
//                 required
//                 name="description"
//                 id="description"
//                 placeholder="Enter description"
//                 className="bg-transparent px-2 py-1 border h-20 resize-none rounded"
//                 value={userInput.description}
//                 onChange={handleUserInput}
//               />

//               <label className="text-lg font-semibold" htmlFor="content">
//                 Content
//               </label>
//               <textarea
//                 required
//                 name="content"
//                 id="content"
//                 placeholder="Enter blog content"
//                 className="bg-transparent px-2 py-1 border h-20 resize-none rounded"
//                 value={userInput.content}
//                 onChange={handleUserInput}
//               />

//               <label className="text-lg font-semibold" htmlFor="author">
//                 Author
//               </label>
//               <input
//                 required
//                 type="text"
//                 name="author"
//                 id="author"
//                 placeholder="Enter author name"
//                 className="bg-transparent px-2 py-1 border rounded"
//                 value={userInput.author}
//                 onChange={handleUserInput}
//               />
//             </div>
//           </main>

//           <button
//             className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all rounded py-2 font-semibold text-lg"
//             type="submit"
//           >
//             {!initialBlogData.newBlog ? "Update Blog" : "Create Blog"}
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default CreateBlog;




import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { createNewBlog, updateBlog } from "../../Redux/blogSlice";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const locationState = useLocation().state || {};
  const initialBlogData = locationState.initialBlogData || { newBlog: true };

  const [isDisabled, setIsDisabled] = useState(!initialBlogData?.newBlog);

  // Normalize category: if it's an object, use its `name`
  const normalizedCategory =
    typeof initialBlogData?.category === "object"
      ? initialBlogData?.category?.name || ""
      : initialBlogData?.category || "";

  const [userInput, setUserInput] = useState({
    title: initialBlogData?.title || "",
    author: initialBlogData?.author || "",
    category: normalizedCategory,
    createdBy: initialBlogData?.createdBy || "",
    description: initialBlogData?.description || "",
    content: initialBlogData?.content || "",
    thumbnail: initialBlogData?.thumbnail || null,
    previewImage:
      initialBlogData?.thumbnail?.secure_url ||
      initialBlogData?.previewImage ||
      "",
  });

  const getImage = (event) => {
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          previewImage: this.result,
          thumbnail: uploadedImage,
        });
      });
    }
  };

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   let res;

  //   const payload = {
  //     ...userInput,
  //     category:
  //       typeof userInput.category === "object"
  //         ? userInput.category?.name
  //         : userInput.category,
  //   };

  //   if (initialBlogData.newBlog) {
  //     if (
  //       !payload.title ||
  //       !payload.category ||
  //       !payload.createdBy ||
  //       !payload.description ||
  //       !payload.thumbnail ||
  //       !payload.content ||
  //       !payload.author
  //     ) {
  //       toast.error("All fields are mandatory");
  //       return;
  //     }
  //     res = await dispatch(createNewBlog(payload));
  //   } else {
  //     if (
  //       !payload.title ||
  //       !payload.category ||
  //       !payload.createdBy ||
  //       !payload.description ||
  //       !payload.content ||
  //       !payload.author
  //     ) {
  //       toast.error("All fields are mandatory");
  //       return;
  //     }
  //     res = await dispatch(updateBlog({ ...payload, id: initialBlogData._id }));
  //   }

  //   if (res && res.meta?.requestStatus === "fulfilled" && res.payload?.success) {
  //     setUserInput({
  //       title: "",
  //       author: "",
  //       category: "",
  //       content: "",
  //       createdBy: "",
  //       description: "",
  //       thumbnail: null,
  //       previewImage: "",
  //     });
  //     setIsDisabled(false);
  //     navigate("/admin/dashboard");
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    let res;
    const payload = { ...userInput };

    // ✅ Normalize category (make sure it's always an ID string)
    if (typeof payload.category === "object") {
      payload.category = payload.category._id;
    }

    if (initialBlogData.newBlog) {
      if (
        !payload.title ||
        !payload.category ||
        !payload.createdBy ||
        !payload.description ||
        !payload.thumbnail ||
        !payload.content ||
        !payload.author
      ) {
        toast.error("All fields are mandatory");
        return;
      }

      res = await dispatch(createNewBlog(payload));
    } else {
      if (
        !payload.title ||
        !payload.category ||
        !payload.createdBy ||
        !payload.description ||
        !payload.content ||
        !payload.author
      ) {
        toast.error("All fields are mandatory");
        return;
      }

      // ✅ Only send thumbnail if a new file was uploaded
      const updatePayload = {
        ...payload,
        id: initialBlogData._id,
        ...(payload.thumbnail instanceof File ? { thumbnail: payload.thumbnail } : {}),
      };

      res = await dispatch(updateBlog(updatePayload));
    }

    if (res && res.meta?.requestStatus === "fulfilled" && res.payload?.success) {
      setUserInput({
        title: "",
        author: "",
        category: "",
        content: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",
      });
      setIsDisabled(false);
      navigate("/admin/dashboard");
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] h-[450px] my-10 shadow-[0_0_10px_black] relative"
        >
          <Link
            to={"/admin/dashboard"}
            className="absolute top-8 text-2xl link text-accent cursor-pointer"
          >
            <AiOutlineArrowLeft />
          </Link>

          <h1 className="text-center text-2xl font-bold">
            {!initialBlogData.newBlog ? "Update" : "Create new"} Blog
          </h1>

          <main className="grid grid-cols-2 gap-x-10">
            {/* Left column */}
            <div className="space-y-6">
              <label className="cursor-pointer" htmlFor="image_uploads">
                {userInput.previewImage ? (
                  <img
                    className="w-full h-44 m-auto border"
                    src={userInput.previewImage}
                    alt="preview"
                  />
                ) : (
                  <div className="w-full h-44 m-auto flex items-center justify-center border">
                    <h1 className="font-bold text-lg">
                      Upload your blog thumbnail
                    </h1>
                  </div>
                )}
              </label>
              <input
                onChange={getImage}
                className="hidden"
                type="file"
                id="image_uploads"
                name="image_uploads"
                accept=".jpg, .jpeg, .png"
                disabled={isDisabled}
              />

              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Blog Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter blog title"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.title}
                  onChange={handleUserInput}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="createdBy">
                Created By
              </label>
              <input
                required
                type="text"
                name="createdBy"
                id="createdBy"
                placeholder="Enter creator name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.createdBy}
                onChange={handleUserInput}
              />

              <label className="text-lg font-semibold" htmlFor="category">
                Blog Category
              </label>
              <input
                required
                type="text"
                name="category"
                id="category"
                placeholder="Enter category"
                className="bg-transparent px-2 py-1 border"
                value={
                  typeof userInput.category === "object"
                    ? userInput.category?.name || ""
                    : userInput.category
                }
                onChange={handleUserInput}
              />

              <label className="text-lg font-semibold" htmlFor="description">
                Blog Description
              </label>
              <textarea
                required
                name="description"
                id="description"
                placeholder="Enter description"
                className="bg-transparent px-2 py-1 border h-20 resize-none"
                value={userInput.description}
                onChange={handleUserInput}
              />

              <label className="text-lg font-semibold" htmlFor="content">
                Content
              </label>
              <textarea
                required
                name="content"
                id="content"
                placeholder="Enter blog content"
                className="bg-transparent px-2 py-1 border h-20 resize-none"
                value={userInput.content}
                onChange={handleUserInput}
              />

              <label className="text-lg font-semibold" htmlFor="author">
                Author
              </label>
              <input
                required
                type="text"
                name="author"
                id="author"
                placeholder="Enter author name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.author}
                onChange={handleUserInput}
              />
            </div>
          </main>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all rounded-sm py-2 font-semibold text-lg"
            type="submit"
          >
            {!initialBlogData.newBlog ? "Update Blog" : "Create Blog"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateBlog;
