import React from 'react';
import CreatorsNav from './creators_nav';

class TrackForm extends React.Component {
        constructor(props){
            super(props);
            this.state = this.props.track;
            this.handleInput = this.handleInput.bind(this);
            this.handleFile = this.handleFile.bind(this);
            this.handleFormRender = this.handleFormRender.bind(this);
            this.handlePrivate = this.handlePrivate.bind(this);
        }

        handlePrivate(boolean){
             return () => this.setState({ private: boolean });
        }

        handleInput(field){
            return (e) =>  this.setState({[field]: e.target.value });
        }

        handleFile(e){
            const track = e.target.files[0];
            this.setState({track_file: track, title: track.name});
            
        }

        handleUploadClick(e){
                e.preventDefault();
                const formData = new FormData();
                formData.append('track[title]', this.state.title);
                formData.append('track[private]', this.state.private);
                formData.append('track[genre]', this.state.genre);
                formData.append('track[track_file]', this.state.track_file);
                formData.append('track[uploader_id]', this.props.currentUser.id);
                this.props.upload(formData);
        }

        // handleDragEnter(e){
        //     e.preventDefault();
        //     this.props.openModal('drop');
        // }

        handleFormRender(){
            if (!this.state.track_file) {

                return (

                <>
                <main className="main-page-container">

                

                <CreatorsNav className='creator-nav' profile_url={this.props.currentUser.profile_url}/>

                            <section className='background-image-container'>

                <div className='upload-form-container'>


                <form className="upload-form">
                    <h1 className='title'>Drag and drop your tracks & albums here</h1 >

                    <label className='submit-button drag-button' onDrop={this.handleFile} onDragEnter={e => e.preventDefault()} onDragLeave={e => e.preventDefault()} onChange={this.handleFile}>
                        or choose files to upload
                        <input className="label-input" type='file' /> 
                    </label>
                    
                    <label id='privacy-label' htmlFor="privacy">
                        Privacy:
                    <input className='radio' type="radio" name="private" checked={this.state.private ? '' : 'checked'} onChange={this.handlePrivate(false)} value="Public" />
                    <span>Public</span>
                    <input className='radio' type="radio" name="private" checked={this.state.private ? 'checked' : ''} onChange={this.handlePrivate(true)} value="Private" />
                    <span>Private</span>
                    </label>
                  

                    <aside>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</aside>
                </form>

                
                <div className='terms-use'>
                    By uploading, you confirm that your sounds comply 
                    with our Terms of Use and you don't infringe anyone else's rights.
                </div>



                </div>

                </section>


                </main>

            </>
                
                )
               
            } else {

                return (
                    <>
                    <main className="main-page-container">



                    <CreatorsNav className='dropped-creator-nav' profile_url={this.props.currentUser.profile_url} />

                    <div className='upload-form-container form-when-dropped'>


                        <form className="upload-form">
                            <h1 className='title'>Drag and drop your tracks & albums here</h1 >
                        <label className='submit-button drag-button smaller-drag-button' onDrop={this.handleFile} onDragEnter={e => e.preventDefault()} onDragLeave={e => e.preventDefault()} onChange={this.handleFile}>
                            or choose files to upload
                        <input className="label-input" type='file' />
                        </label>

                            <aside>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</aside>
                        </form>

                        <div className='terms-use re-upload'>
                            Upload as FLAC, WAV, ALAC or AIFF for best audio quality.
                           <label className='drag-button replace-button' onDrop={this.handleFile} onDragEnter={e => e.preventDefault()} onDragLeave={e => e.preventDefault()} onChange={this.handleFile}>
                                Replace file
                            <input className="label-input" type='file' />
                            </label>
                        </div>
                     </div>
                     <div>

                         <div className="p-bar-container">
                            <span className='p-bar-left'>{this.state.title}</span>
                            <p className='p-bar-right'>Ready. Click Save to post this track.</p>
                         </div>

                        <form className="upload-form-container">
                        
                            <label id='privacy-label' htmlFor="privacy">
                                Privacy:
                    <input className='radio' type="radio" name="private" checked={this.state.private ? '' : 'checked'} onChange={this.handleInput} value="Public" />
                                <span>Public</span>
                                <input className='radio' type="radio" name="private" checked={this.state.private ? 'checked' : ''} onChange={this.handleInput} value="Private" />
                                <span>Private</span>
                            </label>


                            <aside>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</aside>

                        </form>
    
                     </div>
           
                            <div className='terms-use'>
                                By uploading, you confirm that your sounds comply
                                with our Terms of Use and you don't infringe anyone else's rights.
                            </div>

                    </main>
                     </>
                )
            }

        }


        render(){
   
            return this.handleFormRender();

        }




}

export default TrackForm;