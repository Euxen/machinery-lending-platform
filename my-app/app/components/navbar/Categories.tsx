"use client";

import { FC } from "react";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

import {
  GiPowerGenerator,
  GiMineTruck,
  GiForklift,
  GiGears,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiLightProjector,
} from "react-icons/gi";
import { FaTruckLoading } from "react-icons/fa";
import { TbBeach, TbMountain, TbPool, TbBulldozer } from "react-icons/tb";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Mini Excavators",
    icon: TbBeach,
    description:
      "Small excavators, also known as mini excavators or compact excavators, are lightweight, versatile, and portable digging machines. They typically weigh between 1-6 tons and are used for smaller-scale construction, landscaping, and excavation projects, such as digging foundations, trenches, and swimming pools. They are often used in tight spaces where larger excavators can't fit.",
  },
  {
    label: "Skid Steers",
    icon: GiWindmill,
    description:
      "Skid-steer loaders are versatile, four-wheel drive machines used for loading, digging, and material handling in various industries, such as construction, landscaping, and agriculture. They are characterized by their ability to turn in place (skid steer) and their hydraulic-powered attachments, which can be swapped to perform different tasks, such as digging, lifting, and clearing.",
  },
  {
    label: "Generators",
    icon: GiPowerGenerator,
    description:
      "Generators are machines that convert mechanical energy into electrical energy, providing a backup or primary power source for various applications, such as construction sites, homes, and outdoor events. They come in different sizes, types (e.g., diesel, gasoline, propane), and power outputs, and are often used to supply electricity when the main power grid is unavailable or insufficient.",
  },
  {
    label: "Compressors",
    icon: TbMountain,
    description:
      "Compressors are machines that compress air or gas to increase its pressure, typically used to power pneumatic tools, equipment, and systems in industries such as construction, manufacturing, and automotive. They come in various types (e.g., reciprocating, rotary screw, centrifugal) and sizes, ranging from small portable units to large stationary systems.",
  },
  {
    label: "Excavators",
    icon: TbPool,
    description:
      "Excavators are heavy-duty machines used for digging, excavating, and moving earth, rocks, and other materials. They typically consist of a boom, stick, and bucket, and are powered by hydraulic systems. Excavators are commonly used in construction, mining, and landscaping projects, and come in various sizes, from mini excavators to large crawler excavators.",
  },
  {
    label: "Wheel Loaders",
    icon: GiIsland,
    description:
      "Wheel loaders, also known as front-end loaders or bucket loaders, are heavy equipment machines used for loading, lifting, and moving materials such as soil, sand, and aggregate. They typically feature a front-mounted bucket and are equipped with four-wheel drive, allowing for mobility and versatility on various terrain. Wheel loaders are commonly used in construction, mining, and quarrying applications.",
  },
  {
    label: "Bulldozers",
    icon: TbBulldozer,
    description:
      "Bulldozers, also known as crawler tractors or dozers, are heavy equipment machines used for pushing, grading, and moving large amounts of soil, sand, and other materials. They feature a large blade mounted on the front and are equipped with tracks for mobility and traction. Bulldozers are commonly used in construction, mining, and landscaping projects to clear land, create foundations, and grade surfaces.",
  },
  {
    label: "Articulating Trucks",
    icon: GiMineTruck,
    description:
      "Articulating trucks, also known as articulated haulers or dump trucks, are heavy equipment vehicles used for hauling and transporting heavy loads of materials such as soil, sand, and aggregate. They feature a jointed or articulated frame that allows for flexibility and maneuverability, especially in tight spaces and rough terrain. Articulating trucks are commonly used in construction, mining, and quarrying applications.",
  },
  {
    label: "Backhoe Loaders",
    icon: GiCastle,
    description:
      "Backhoe Loaders are versatile, four-wheel drive machines used for digging, loading, and material handling in various industries, such as construction, landscaping, and agriculture. They feature a backhoe attachment for digging and excavating, and a front-end loader for lifting and moving materials.",
  },
  {
    label: "Scissor Lifts",
    icon: GiCaveEntrance,
    description:
      "Scissor Lifts are aerial work platforms used to lift personnel and equipment to high areas, typically for maintenance, construction, and repair work. They are characterized by their scissor-like mechanism that extends and retracts to change height, providing a stable and secure working surface.",
  },
  {
    label: "Boom Lifts",
    icon: GiForestCamp,
    description:
      "Boom Lifts are aerial work platforms used to lift personnel and equipment to high areas, typically for maintenance, construction, and repair work. They feature a boom that extends from the main structure of the lift, allowing for easy access to high areas. The boom can be equipped with various attachments, such as a bucket or a crane, to perform tasks such as lifting and moving materials.",
  },
  {
    label: "Telehandlers",
    icon: BsSnow,
    description:
      "Telehandlers are versatile, heavy-duty machines used for lifting, moving, and placing heavy loads, typically in construction, agriculture, and industrial settings. They feature a telescoping boom that can extend and retract to change height and reach, and are often equipped with various attachments such as forks, buckets, and pallet forks.",
  },
  {
    label: "Rough Terrain Forklifts",
    icon: GiForklift,
    description:
      "Rough Terrain Forklifts are heavy-duty, four-wheel drive forklifts designed to operate in challenging environments, such as construction sites, mining, and rough outdoor terrain. They feature a robust design, high ground clearance, and large tires to navigate uneven and difficult surfaces, and are often used for lifting and moving heavy loads in harsh conditions.",
  },
  {
    label: "Industrial Forklifts",
    icon: FaTruckLoading,
    description:
      "Industrial Forklifts are heavy-duty machines used for lifting, moving, and placing heavy loads in industrial settings, such as warehouses, manufacturing facilities, and distribution centers. They are designed for high-capacity lifting and are often used for tasks such as loading and unloading goods, stacking pallets, and moving heavy equipment.",
  },
  {
    label: "Compaction",
    icon: IoDiamond,
    description: `A Compaction Machine, also known as a Compactor, is a heavy equipment machine used to compress and densify materials such as soil, asphalt, or concrete. Examples of compaction machines include: Rollers (e.g. smooth drum rollers, pneumatic rollers), Plate Compactors, Rammers, Vibratory Compactors, and Hand Compactors.
      These machines apply pressure, vibration, or impact to the material being compacted, increasing its density and stability.`,
  },
  {
    label: "Light Towers",
    icon: GiLightProjector,
    description:
      "Light Towers are portable, self-contained lighting systems used to provide illumination for nighttime work, events, or emergency situations. They typically consist of a mast or tower that supports one or more high-intensity lights, and are often powered by a generator or battery. Light Towers are commonly used in construction, mining, and outdoor events to provide reliable and efficient lighting.",
  },
  {
    label: "Specialty Equipment",
    icon: IoDiamond,
    description: `Specialty Equipment in Construction refers to unique and highly specialized machines designed to perform specific tasks on construction sites. Examples of specialty equipment includes: Pile Drivers (for driving deep foundation piles), Cranes (for heavy lifting and placement), Concrete Pumps (for pumping concrete to high or hard-to-reach areas), Tunnel Boring Machines (for digging tunnels), Bridge Cranes (for bridge construction and maintenance), Foundation Drilling Rigs (for drilling deep foundation holes), and
Geotechnical Drilling Rigs (for soil and rock sampling). These machines are often custom-built or highly modified to meet the specific needs of a particular project or application.`,
  },
  {
    label: "Attachments",
    icon: GiGears,
    description: `In construction, "Attachments" refer to specialized tools or devices that can be attached to heavy equipment, such as excavators, skid-steer loaders, or telehandlers, to perform specific tasks or functions. Examples of attachments includes: Buckets (for digging and excavating), Hydraulic Hammers (for breaking up concrete or rock), Augers (for drilling holes), Grapples (for lifting and moving heavy objects), Shears (for cutting metal or other materials), Forks (for lifting and moving pallets or other loads), Mowers (for cutting vegetation), and Trenchers (for digging trenches). Attachments can greatly increase the versatility and productivity of heavy equipment, allowing contractors to perform a wide range of tasks with a single machine.`,
  },
];

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className="
        pt-4 
        flex 
        flex-row 
        items-center 
        justify-between
        overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
