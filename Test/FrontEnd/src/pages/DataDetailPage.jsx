import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router";
import api from "../lib/axios.js";
import { ArrowLeftIcon, LoaderIcon, TrashIcon } from "lucide-react";

const DataDetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/test/${id}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/test/${id}`);
      toast.success("Note deleted successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note.");
    }
  };

  const handleSave = async () => {
    if (!data.title.trim() || !data.content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/test/${id}`, data);
      toast.success("Note updated successfully.");
      navigate("/");
    } catch (error) {
      console.log("Error saving data", error);
      toast.error("Failed to update note.");
    } finally {
      setSaving(false);
    }
  };

  console.log({ data });

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-8" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost">
              <ArrowLeftIcon className="size-4" />
              Back to Home
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <TrashIcon className="size-5" />
              Delete
            </button>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Note Title"
              className="input input-bordered"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              placeholder="Type your content here"
              className="textarea textarea-bordered h-32"
              value={data.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
          </div>

          <div className="card-action justify-end">
            <button
              className="btn btn-primary"
              disabled={saving}
              onClick={handleSave}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDetailPage;
