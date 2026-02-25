import { useState, useCallback, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> {
  /** If true, loads eagerly with high fetch priority (for hero/above-the-fold) */
  priority?: boolean;
  /** Aspect ratio string for the container, e.g. "3/4" */
  aspectRatio?: string;
  /** Warm placeholder color shown while image loads */
  placeholderColor?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  priority = false,
  aspectRatio,
  placeholderColor = "hsl(36, 30%, 88%)",
  style,
  ...rest
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: placeholderColor,
        aspectRatio: aspectRatio || undefined,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ease-out ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        onLoad={handleLoad}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage;
