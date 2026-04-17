/* eslint-disable react/prop-types */

const OptimizedPicture = ({
  picture,
  alt,
  sizes = '100vw',
  className = '',
  pictureClassName = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  ...imgProps
}) => {
  if (!picture?.img?.src) {
    return null;
  }

  return (
    <picture className={pictureClassName}>
      {Object.entries(picture.sources ?? {}).map(([format, srcSet]) => (
        <source
          key={format}
          type={`image/${format}`}
          srcSet={srcSet}
          sizes={sizes}
        />
      ))}
      <img
        src={picture.img.src}
        alt={alt}
        width={picture.img.w}
        height={picture.img.h}
        sizes={sizes}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchPriority}
        {...imgProps}
      />
    </picture>
  );
};

export default OptimizedPicture;
