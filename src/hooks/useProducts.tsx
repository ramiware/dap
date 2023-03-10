import airFilters from "../assets/products/air-filters.png"
import brakeCalipers from "../assets/products/brake-calipers.png"
import brakePads from "../assets/products/brake-pads.png"
import brakeRotors from "../assets/products/brake-rotors.png"
import exhausts from "../assets/products/exhausts.png"
import lighting from "../assets/products/lighting.png"
import motorOils from "../assets/products/motor-oils.png"
import powerSteeringHoses from "../assets/products/power-steering-hoses.png"
import sparkPlugs from "../assets/products/spark-plugs.png"
import suspension from "../assets/products/suspension.png"


type Product = {
  id: number,
  name: string,
  thumb: string,
  link: string
}

const dpAirFilters: Product = {
  id: 1,
  name: "Air Filters",
  thumb: airFilters,
  link: "#"
}

const dpBrakeCalipers: Product = {
  id: 2,
  name: "Brake Calipers",
  thumb: brakeCalipers,
  link: "#"
}

const dpBrakePads: Product = {
  id: 3,
  name: "Brake Pads",
  thumb: brakePads,
  link: "#"
}

const dpBrakeRotors: Product = {
  id: 4,
  name: "Brake Rotors",
  thumb: brakeRotors,
  link: "#"
}

const dpExhausts: Product = {
  id: 5,
  name: "Exhausts",
  thumb: exhausts,
  link: "#"
}

const dpLighting: Product = {
  id: 6,
  name: "Lighting",
  thumb: lighting,
  link: "#"
}

const dpMotorOils: Product = {
  id: 7,
  name: "Motor Oils",
  thumb: motorOils,
  link: "#"
}

const dpPowerSteeringHoses: Product = {
  id: 8,
  name: "Power Steering Hoses",
  thumb: powerSteeringHoses,
  link: "#"
}

const dpSparkPlugs: Product = {
  id: 9,
  name: "Spark Plugs",
  thumb: sparkPlugs,
  link: "#"
}

const dpSuspension: Product = {
  id: 10,
  name: "Suspension",
  thumb: suspension,
  link: "#"
}



export function useProducts() {

  const dapProducts: Product[] = [];
  dapProducts.push(dpAirFilters);
  dapProducts.push(dpBrakeCalipers);
  dapProducts.push(dpBrakePads);
  dapProducts.push(dpBrakeRotors);
  dapProducts.push(dpExhausts);
  dapProducts.push(dpLighting);
  dapProducts.push(dpMotorOils);
  dapProducts.push(dpPowerSteeringHoses);
  dapProducts.push(dpSparkPlugs);
  dapProducts.push(dpSuspension);

  return { dapProducts }
};