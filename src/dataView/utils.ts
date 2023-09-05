import data from "./compareX.json";
import {MonthData, ProductKey, MONTHS_ARRAY} from '../constants';

const sortString = (unsorted: string) => {
  return unsorted.split("").sort().join("");
};

export const getJsonKeyForProduct = (
  productA: string,
  productB: string
): ProductKey => {
  const firstProductCode = productA.charAt(productA.length - 1);
  const secondProductCode = productB.charAt(productA.length - 1);

  const productCombination = firstProductCode + secondProductCode;

  return ("Compare" + sortString(productCombination)) as ProductKey;
};

export const getMonthData = (
  productKey: ProductKey,
  month: MonthData
): Array<string> => {
  return data["monthly_comparison"][month][productKey];
};

export const getOverallData = (
  productKey: ProductKey,
  tillMonth: string
): Array<string> => {
  let overallData: Array<string> = [];

  const monthNumber = MONTHS_ARRAY.indexOf(tillMonth);
  let itr = 0;
  while (itr <= monthNumber) {
    const monthlyData = data["monthly_comparison"][MONTHS_ARRAY[itr] as MonthData][productKey]
    overallData.push.apply(overallData, monthlyData);

    itr++;
    console.log(monthlyData)
    console.log(overallData)
  }

  return overallData;
};
