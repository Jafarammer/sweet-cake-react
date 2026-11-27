import React, { useState, useEffect } from "react";

const VideoPreview = ({ file }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    if (typeof file === "object" && file.video_url) {
      setPreviewUrl(file.video_url);
      return;
    }

    if (file instanceof Blob) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }

    setPreviewUrl(null);
  }, [file]);

  if (!previewUrl) return null;
  return (
    <video
      src={previewUrl}
      controls
      width={"100%"}
      height={420}
      style={{
        display: "block",
        marginTop: 12,
        borderRadius: 8,
      }}
    />
  );
};

export default VideoPreview;
