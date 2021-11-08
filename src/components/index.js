import dynamic from "next/dynamic";

const ComponentMap = {
  loki: {
    Button: dynamic(() => import(`./button/button-loki`)),
  },
  thor: {
    Button: dynamic(() => import(`./button/button-thor`)),
  },
  odin: {
    Button: dynamic(() => import(`./button/button-odin`)),
  },
};

export default ComponentMap;
