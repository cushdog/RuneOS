import PropTypes from "prop-types"

// this is mainly for time line
const CheckpointSlide = ({title, cpDate, breif}) => {
    return(
        <div className="cp-slide">
            <div className='cp-timemark'></div>
            <div className='cp-contentbox'>
                <div className='cp-title'>{title}</div>
                <div className="cp-date">{cpDate}</div>
                <div className="cp-breif">{breif}</div>
            </div>

        </div>
    );
}

CheckpointSlide.propTypes = {
    title: PropTypes.string,
    cpDate: PropTypes.string,
    brief: PropTypes.string
}
export default CheckpointSlide;