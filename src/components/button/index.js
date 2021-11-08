import dynamic from "next/dynamic";

const Button = {
  loki: dynamic(() => import(`./button-loki`)),
  thor: dynamic(() => import(`./button-thor`)),
  odin: dynamic(() => import(`./button-odin`)),
};

export default Button;
