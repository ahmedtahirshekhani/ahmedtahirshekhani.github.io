import Image from "next/image";
import ahmed from "../../assets/images/ahmed3.jpg";
const ResumeImage = () => {
  return (
    <div className="avatar pl-10 ml-3">
      <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-white">
        <Image src={ahmed} alt="Ahmed Tahir Shekhani" />
      </div>
    </div>
  );
};

export default ResumeImage;
