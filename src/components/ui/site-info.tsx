type Props = {
  title: string;
  text: string;
};
const SiteInfo = ({ title, text }: Props) => {
  return (
    <>
      <hr className='w-full' />
      <div>
        <h1 className='text-3xl font-bold py-3'>{title}</h1>
        <p className=''>{text}</p>
      </div>
    </>
  );
};

export default SiteInfo;
