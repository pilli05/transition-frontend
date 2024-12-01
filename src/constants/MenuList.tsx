import InternalAuditIcon from "../../src/assets/MenuIcons/Internal-audit.png";
import UatTesting from "../../src/assets/MenuIcons/uat-testing.png";
import Intract from "../../src/assets/MenuIcons/intract.png";
import Queue from "../../src/assets/MenuIcons/queue.png";
import Workflow from "../../src/assets/MenuIcons/workflow.png";
import Admin from "../../src/assets/MenuIcons/admin.png";
import Asset from "../../src/assets/MenuIcons/asset.png";
import Parent from "../../src/assets/MenuIcons/parent.png";
import OptionOne from "../../src/assets/MenuIcons/option-1.png";
import OptionTwo from "../../src/assets/MenuIcons/option-2.png";
import AllAccesories from "../../src/assets/MenuIcons/all-accessories.png";
import Decorating from "../../src/assets/MenuIcons/decorating.png";
import Presenting from "../../src/assets/MenuIcons/presenting.png";

export const MenuList = [
  {
    id: 1,
    name: "Internal Audit",
    icon: InternalAuditIcon,
    link: "/internal-audit",
    subLink: true,
  },
  {
    id: 2,
    name: "UAT Testing",
    icon: UatTesting,
    link: "/uat-testing",
    subLink: false,
  },
  {
    id: 3,
    name: "Intract",
    icon: Intract,
    link: "/intract",
    subLink: true,
  },
  {
    id: 4,
    name: "Queue",
    icon: Queue,
    link: "/queue",
    subLink: false,
  },
  {
    id: 5,
    name: "Workflow",
    icon: Workflow,
    link: "/workflow",
    subLink: false,
  },
  {
    id: 6,
    name: "Admin",
    icon: Admin,
    link: "/admin",
    subLink: false,
  },
  {
    id: 7,
    name: "Asset",
    icon: Asset,
    link: "/asset",
    subLink: false,
  },
  {
    id: 8,
    name: "Parent",
    icon: Parent,
    link: "/parent",
    subLink: false,
  },
  {
    id: 9,
    name: "Option One",
    icon: OptionOne,
    link: "/option-one",
    subLink: false,
  },
  {
    id: 10,
    name: "Option Two",
    icon: OptionTwo,
    link: "/option-two",
    subLink: false,
  },
  {
    id: 11,
    name: "All Accessories",
    icon: AllAccesories,
    link: "/all-accessories",
    subLink: false,
  },
  {
    id: 12,
    name: "Decorating",
    icon: Decorating,
    link: "/decorating",
    subLink: true,
  },
  {
    id: 13,
    name: "Presenting",
    icon: Presenting,
    link: "/presenting",
    subLink: false,
  },
];
