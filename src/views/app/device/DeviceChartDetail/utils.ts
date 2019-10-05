interface Column {
  label?: string;
  field?: string;
  sort?: string;
  width?: number;
  searchable?: boolean;
  [rest: string]: any;
}

export const normalizeDataForTable = (deviceChartsData: any) => {
  if (!deviceChartsData || deviceChartsData.length < 1) {
    return undefined;
  }

  const columns: Column[] = Object.keys(deviceChartsData[0]).map(columnName => {
    return {
      label: columnName,
      field: columnName,
      sort: 'desc',
      width: 100
    };
  });

  return { columns, rows: deviceChartsData };
};

export interface SummaryData {
  entityName: string;
  average?: string;
  minValue?: string;
  maxValue?: string;
}

export const normalizeSummaryData = (deviceChartsData: any): SummaryData[] => {
  if (deviceChartsData) {
    const keys = Object.keys(deviceChartsData.entities);
    const { averages, maxValues, minValues } = deviceChartsData;
    const summaryArray: SummaryData[] = keys.map(key => {
      return {
        entityName: key,
        average: averages[key],
        maxValue: maxValues[key],
        minValue: minValues[key]
      };
    });
    return summaryArray;
  }

  return [];
};

export const getSlicedArray = (data: any, size: number) => {
  return data ? data.slice(0, size) : [];
};
