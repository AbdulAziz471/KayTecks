const FooterBar = () => {
  return (
    <>
      <div class="py-[17px] lg:flex lg:flex-row lg:justify-between lg:px-8 md:flex md:flex-col-reverse md:items-center md:gap-r-4 flex justify-center flex-col-reverse items-center md:gap-r-4">
        <span class="text-sm text-[17px] text-black text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            {/* Flowbite™ */}
          </a>
          Webcontrive Technologies Pvt Ltd. All rights reserved.
        </span>
        <div className="flex gap-x-4 gap-y-3">
          <p className=" border-r border-black pr-4">Privacy Policy</p>
          <p className=" border-r border-black pr-2.5">Cookie Policy</p>
          <p>Terms</p>
        </div>
      </div>
    </>
  );
};

export default FooterBar;
