import React from "react";

const Images: React.FC = () => {
  return (
    <div>
      <h1>Página de imagen</h1>
      <p>This is the images page.</p>
      <img
        style={{ width: "40vw" }}
        src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
        alt="sl"
      />
    </div>
  );
};

export default Images;
