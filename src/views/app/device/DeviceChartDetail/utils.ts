import { IChart } from '../../../../store/project/types';

interface Column {
  label?: string;
  field?: string;
  sort?: string;
  width?: number;
  searchable?: boolean;
  [rest: string]: any;
}

interface IRow {
  [rest: string]: any;
  clickEvent?: (() => void) | undefined;
}

export const normalizeDataForTable = (data: any) => {
  if (!data || data.length < 1) {
    return undefined;
  }

  const columns: Column[] = Object.keys(data[0]).map(columnName => {
    return {
      label: columnName,
      field: columnName,
      sort: 'desc'
    };
  });

  const rows: IRow[] = data;

  return { columns, rows };
};

export interface SummaryData {
  entityName: string;
  average?: string;
  minValue?: string;
  maxValue?: string;
  color?: string;
}

export const normalizeSummaryData = (deviceChartsData: any, currentChart: IChart): SummaryData[] => {
  try {
    if (deviceChartsData && currentChart) {
      const { elements } = currentChart;

      const keys = Object.keys(deviceChartsData.entities);
      const { averages, maxValues, minValues } = deviceChartsData;
      const summaryArray: SummaryData[] = keys.map((key: any) => {
        const element = elements.find(item => item.key === key);

        return {
          entityName: key,
          average: averages[key],
          maxValue: maxValues[key],
          minValue: minValues[key],
          color: element && element.color
        };
      });

      const elementKeys = elements.map(element => element.key);

      return summaryArray.filter(item => elementKeys.includes(item.entityName));
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const getSlicedArray = (data: any, size: number) => {
  return data ? data.slice(0, size) : [];
};
