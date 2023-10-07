import { FaRegStar, FaRegRectangleList, FaRegHardDrive } from 'react-icons/fa6';

const ThreePointsSection = ({ title, point1, point2, point3 }) => {
    return (
        <section className='w-100 p-tb-main-2 bg-main'>
            <h2 className='fs-48 p-m-reset pb-30'>{title}</h2>
            <div>
                <div className="flex flex-g-20 mw-container center flex-ai-c flex-jc-sb">
                    <div className="mw-30 min-w-200">
                        <div className='c-main fs-48 p-tb-10 flex flex-jc-c flex-ai-c'><FaRegStar /></div>
                        <b className="fs-30">{point1.title}</b>
                        <p className="c-grey">{point1.content}</p>
                    </div>
                    <div className="mw-30 min-w-200">
                        <div className='c-main fs-48 p-tb-10 flex flex-jc-c flex-ai-c'><FaRegHardDrive /></div>
                        <b className="fs-30">{point2.title}</b>
                        <p className="c-grey">{point2.content}</p>
                    </div>
                    <div className="mw-30 min-w-200">
                        <div className='c-main fs-48 p-tb-10 flex flex-jc-c flex-ai-c'><FaRegRectangleList /></div>
                        <b className="fs-30">{point3.title}</b>
                        <p className="c-grey">{point3.content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreePointsSection;