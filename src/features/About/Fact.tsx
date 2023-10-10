import { IFacts } from '../../moduls'

export const Fact = ({sentence, url}:IFacts) => {
  return (
    <div className='text-white rounded-xl bg-[#291731] flex flex-col items-center m-2 h-[200px] p-4 justify-around'>
        <img src={url} className='w-12 laptop:w-14'/>
        <span className='text-center text-xs laptop:text-sm full:text-base'>{sentence}</span>
    </div>
  )
}
