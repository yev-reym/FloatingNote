import React from 'react';


class TrackShow extends React.Component {

    constructor(props){
        super(props);
        const {currentUser} = this.props;
        this.state = {trackId: null, title: null, username: null,
             photoUrl: null, uploaderId: null, currentUser, trackUrl: null, createdAt: null };
        this.renderTrack = this.renderTrack.bind(this);
        this.formatCreateTime = this.formatCreateTime.bind(this);

    }

    componentDidMount(){

        this.props.fetchTrack(this.props.match.params.trackId)

    }

    formatCreateTime(){

        const createdAt = this.props.track.created_at;
        const currentTime = new Date();
        const createdTime = new Date(createdAt);
        const diffYear = currentTime.getFullYear() - createdTime.getFullYear();
        const diffMonth = (currentTime.getMonth() + 1) - (createdTime.getMonth() + 1);
        const diffDay = currentTime.getDate() - createdTime.getDate();
        const diffHours = currentTime.getHours() - createdTime.getHours();
        const diffMinutes = currentTime.getMinutes() - createdTime.getMinutes();
    
        if (diffYear) {
            return diffYear === 1 ? <h1>{`${diffYear} year ago`}</h1> : <h1>{`${diffYear} years ago`}</h1>
        } else if (diffMonth) {
            return diffMonth === 1 ? <h1>{`${diffMonth} month ago`}</h1> : <h1>{`${diffMonth} months ago`}</h1>
        } else if (diffDay) {
            return diffDay === 1 ? <h1>{`${diffDay} day ago`}</h1> : <h1>{`${diffDay} days ago`}</h1>
        } else if (diffHours) {
            return diffHours === 1 ? <h1>{`${diffHours} hour ago`}</h1> : <h1>{`${diffHours} hours ago`}</h1>
        } else if (diffMinutes) {
            return diffMinutes === 1 ? <h1>{`${diffMinutes} minute ago`}</h1> : <h1>{`${diffMinutes} minutes ago`}</h1>
        } else {
            return <h1>Less than a minute ago</h1>
        }
 
    }

    componentDidUpdate(prevProps){

    }

    renderTrack(){

        const photo = this.props.track.photoUrl ? <img id='track-image' src={this.props.track.photoUrl} /> : null
        const username = this.props.uploader.username ? this.props.uploader.username : null
        const trackTitle = this.props.track.title ? this.props.track.title : null
        const createTime = this.props.track.created_at ? this.formatCreateTime() : null


        return (
       
            <div className="page-container">
                <main className="main-container">

                    <div className='track-info-container'>
                        <ul className="track-info">
                            <li id='username'>{username}</li>
                            <li id='track-title'>{trackTitle}</li>
                        </ul>

                        {createTime}
                    </div>
                      
                    <div className='track-photo-container'>
                        {photo}
                    </div>

                </main>
            </div>
        )
    }

    render(){

        return(
            this.renderTrack()
        )
    }




}


export default TrackShow

//method to get background color based on average pixel color to implement later

    // getAverageRGB(photo) {

    //         const img = document.getElementById('track-image');
    //         img.src = photo.props.src;
    //         
    //         img.onload = function() {
    //         const blockSize = 5; // only visit every 5 pixels
    //         const canvas = document.createElement('canvas');
    //         const context = canvas.getContext('2d');
    //         let i = -4;
    //         const rgb = { r: 0, g: 0, b: 0 };
    //         let count = 0;

    //         const height = canvas.height = img.naturalHeight || img.offsetHeight || img.height;
    //         const width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;
    //         
    //         //draw the image onto the canvas
    //         context.drawImage(img,  0, 0);

    //         //get flattened array of pixel data from the canvas image
    //         
    //         const imgData = context.getImageData(0, 0, width, height);
    //         
    //         const length = imgData.data.length;

    //         while ((i += blockSize * 4) < length) {
    //             ++count;
    //             rgb.r += imgData.data[i];
    //             rgb.g += imgData.data[url("default-image.png")
    //             rgb.b += imgData.data[url("default-image.png")
    //         }

    //         // ~~ used to floor valuesurl("default-image.png")
    //         rgb.r = ~~(rgb.r / count);
    //         rgb.g = ~~(rgb.g / count);
    //         rgb.b = ~~(rgb.b / count);
    //         
    //         return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1.0)`;
    //         }


    // }
