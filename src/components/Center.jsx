
function Center({ loading, products }) {


  if (loading) return <div className="text-center mt-10">Loading...</div>;
  return (
    <>
      {products.map((item, index) => (
        <div key={index} className='flex flex-col w-[250px] p-2 bg-white justify-center border-2 border-black'>
          <div className='flex flex-col w-[100%]'>
            <img src={item.image} alt={item.title} className=' w-[100%]  h-[200px]' />
          </div>
          <div className=" flex flex-col gap-1 justify-center">
            <p>{item.title} ({item.category})</p>
            <p>Price:${item.price}</p>
            <p>Rating:{item.rating.rate}/5 ({item.rating.count})Reviews</p>
          </div>
        </div>
      ))}
    </>

  )
}

export default Center;
