export default function iterateThroughObject(reportWithIterator) {
	  let result = '';
	  for (const department of reportWithIterator) {
		      if (Array.isArray(department)) {
			            result += department.join(' | ') + ' | ';
			          } else {
					        result += department + ' | ';
					      }
		    }
	  return result.slice(0, -2); // Remove the trailing ' | ' at the end
}
