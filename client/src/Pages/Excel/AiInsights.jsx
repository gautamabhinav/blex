import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAiInsights, clearInsights } from "../../Redux/aiSlice";

function AiInsights({ parsedData }) {
  const dispatch = useDispatch();
  const { insights, loading, error } = useSelector((state) => state.ai);

  const handleGenerate = () => {
    if (!parsedData || parsedData.length === 0) {
      alert("Please upload Excel data first!");
      return;
    }
    dispatch(fetchAiInsights(parsedData));
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        {loading ? "Analyzing..." : "Generate AI Insights"}
      </button>

      {error && (
        <div className="mt-4 p-2 bg-red-100 text-red-600 rounded">
          Error: {error}
        </div>
      )}

      {insights && (
        <div className="mt-6 p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-2">AI Insights:</h3>
          <p className="text-gray-700 whitespace-pre-line">{insights}</p>
          <button
            onClick={() => dispatch(clearInsights())}
            className="mt-3 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default AiInsights;
