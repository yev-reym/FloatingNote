import React from 'react';
import track_form_container from './track_form_container';


class TrackShow extends React.Component {

    constructor(props){
        super(props);
        this.getAverageRGB = this.getAverageRGB.bind(this);
        this.state = {style: null};
    }
    
    getAverageRGB() {
        const img = document.getElementById('hidden-image');
        debugger
        const blockSize = 5; // only visit every 5 pixels
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        let i = -4;
        const rgb = { r: 0, g: 0, b: 0 };
        let count = 0;

        const height = canvas.height = img.naturalHeight || img.offsetHeight || img.height;
        const width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;
        debugger
        //draw the image onto the canvas
        context.drawImage(img,  0, 0);

        //get flattened array of pixel data from the canvas image
        debugger
        const imgData = context.getImageData(0, 0, width, height);
        debugger
        const length = imgData.data.length;

        while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1.0)`;

    }


    render(){

        return(

            <main className="main-container" style={this.getAverageRGB()}>
                <img id='hidden-image' src={`${this.props.track.photoUrl}`} />
                <section className="show-cover">
                    Hello!
                </section>
            
            
            </main>
        )
    }




}


export default TrackShow