interface Column {
  label?: string;
  field?: string;
  sort?: string;
  width?: number;
  searchable?: boolean;
  [rest: string]: any;
}

export const normalizaDataForTable = (deviceChartsData: any) => {
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
