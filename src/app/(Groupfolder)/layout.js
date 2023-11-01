import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const GroupLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default GroupLayout;
