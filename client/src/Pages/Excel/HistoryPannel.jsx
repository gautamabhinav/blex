import React, { useEffect } from "react";
import { FiTrash2, FiDownload, FiEye, FiPlay } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getExcelFiles, deleteExcelFile } from "../../Redux/excelSlice";

export default function HistoryPanel({ onClose, onPreview, onAnalyze, onDownload }) {
  const dispatch = useDispatch();
  const { files, status, error } = useSelector((state) => state.excel);

  useEffect(() => {
    dispatch(getExcelFiles());
  }, [dispatch]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-4xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Close
        </button>

        <h2 className="text-xl font-semibold mb-4">📜 Upload History</h2>

        {status.fetchAll === "loading" && <p>Loading history...</p>}
        {status.fetchAll === "failed" && <p className="text-red-500">{error?.fetchAll}</p>}

        {files?.length === 0 && status.fetchAll === "succeeded" ? (
          <p>No files uploaded yet.</p>
        ) : (
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {files.map((f) => (
              <div
                key={f._id}
                className="p-4 border rounded flex justify-between items-center bg-gray-50"
              >
                <div>
                  <p className="font-medium">{f.filename}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(f.uploadedAt).toLocaleString()} •{" "}
                    {(f.size / 1024).toFixed(2)} KB
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onPreview(f._id)}
                    className="p-2 bg-blue-100 rounded text-blue-600"
                  >
                    <FiEye />
                  </button>
                  <button
                    onClick={() => onAnalyze(f._id)}
                    className="p-2 bg-indigo-100 rounded text-indigo-700"
                  >
                    <FiPlay />
                  </button>
                  <button
                    onClick={() => onDownload(f)}
                    className="p-2 bg-yellow-100 rounded text-yellow-700"
                  >
                    <FiDownload />
                  </button>
                  <button
                    onClick={() => dispatch(deleteExcelFile(f._id))}
                    className="p-2 bg-red-100 rounded text-red-600"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
