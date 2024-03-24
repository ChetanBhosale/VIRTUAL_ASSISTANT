const ImageBanner = () => {
  return (
    <div className="w-full">
      <img
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.3"
        className="w-full object-cover z-0"
        src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default ImageBanner;
