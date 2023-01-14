import Image from "next/image";
import ahmed from "../../assets/images/ahmed3.jpg";
const ResumeImage = () => {
  return (
    <div className="avatar">
      <div className="w-3/4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-white">
        <Image src={ahmed} alt="Ahmed Tahir Shekhani" />
      </div>
    </div>
  );
};

export default ResumeImage;
