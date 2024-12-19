import { useState, useMemo } from 'react';

function ReviewTable({ data, onConfirm }) {
  const [review, setReview] = useState(data);

  // Method #1:
  // const [order, setOrder] = useState('asc');
  // const sorting = col => {
  //   if (order === 'asc') {
  //     const sorted = [...review].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setReview(sorted);
  //     setOrder('dsc');
  //   }
  //   if (order === 'dsc') {
  //     const sorted = [...review].sort((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     );
  //     setReview(sorted);
  //     setOrder('asc');
  //   }
  // };

  // Method #2:
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'descending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  }, [data, sortConfig]);

  const requestKey = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === 'descending'
    ) {
      direction = null;
    }

    setSortConfig({ key, direction });
  };

  return (
    <div className='relative overflow-x-auto'>
      {/* <div className='text-white flex bg-[#0c426c]'>
        <button className='text-4xl ml-auto px-6' onClick={onConfirm}>
          &times;
        </button>
      </div> */}

      <table className='w-full text-sm text-left rtl:text-right text-white sortable'>
        <thead className='text-md text-white uppercase bg-[#0c426c] py-4'>
          <tr>
            <th scope='col' className='px-6 py-3 w-1/6'>
              Review
            </th>
            <th scope='col' className='px-6 py-3 w-1/2'>
              Text
            </th>
            <th scope='col' className='px-6 py-3'>
              Stars
            </th>
            <th
              scope='col'
              className='px-6 py-3'
              // onClick={() => sorting('polarity')}
              // onClick={() => console.log('polarity')}
            >
              Polarity
            </th>
            <th scope='col' className='px-6 py-3'>
              Subjectivity
            </th>
            <th scope='col' className='px-6 py-3'>
              Flag
            </th>
          </tr>
        </thead>
        <tbody className='px-12'>
          {sortedData.map((review, i) => (
            <tr
              // class='odd:bg-white odd:dark:bg-zinc-900 even:bg-zinc-50 even:dark:bg-zinc-800 border-b dark:border-zinc-950'
              className='odd:bg-[#082c48] even:bg-[#0c426c] border-b border-[#0a375a]'
              key={review.id}
            >
              <td className='px-6 py-4'>Review {review.id}</td>
              <td className='px-6 py-4'>{review.text}</td>
              <td className='px-6 py-4'>{review.stars}</td>
              <td className='px-6 py-4'>{review.polarity}</td>
              <td className='px-6 py-4'>{review.subjectivity}</td>
              <td className='px-6 py-4'>{review.flagged}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewTable;
