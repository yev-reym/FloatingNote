import React from 'react';
import CreatorsNav from './creators_nav';

class TrackForm extends React.Component {
        constructor(props){
            super(props);
            this.state = this.props.track;
            this.handleInput = this.handleInput.bind(this);
            this.handleFile = this.handleFile.bind(this);
        }

        handleInput(field){
            return (e) =>  this.setState({[field]: e.target.value });
        }

        handleFile(e){
            this.setState({track_file: e.currenTarget.files[0]});
        }

        handleUpload(e){
                e.preventDefault();
                const formData = new FormData();
        }


        render(){
   
            return (

                <>
                <main className="main-page-container background-picture-container">

                <CreatorsNav className='creators-nav' profile_url={this.props.currentUser.profile_url}/>

                

                <div className='upload-form-container'>


                <form>
                    <h1>Drag and drop your tracks & albums here</h1 >
                    <div><input type="file" onChange={this.handleFile} />or choose files to upload</div> 
                    <input type="radio" name="private" onChange={this.handleInput} value="Public" />
                    <input type="radio" name="private" onChange={this.handleInput} value="Private" />

                    <aside>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</aside>
                </form>

                <div>
                    By uploading, you confirm that your sounds comply 
                    with our Terms of Use and you don't infringe anyone else's rights.
                </div>



                </div>

                </main>

            </>
                

               
            );

        }




}

export default TrackForm;