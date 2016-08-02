import Papa from 'papaparse';

export default function(file){
  console.log('Received file: ', file);
  Papa.parse(file[0], {
    skipEmptyLines: true,
    complete(results){
      return results.data;
    }
  });
}
