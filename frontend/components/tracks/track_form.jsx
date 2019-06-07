import React from 'react';
import CreatorsNav from './creators_nav';
import {Redirect} from 'react-router-dom';

class TrackForm extends React.Component {
        constructor(props){
            super(props);
            this.state = this.props.track;
            this.handleInput = this.handleInput.bind(this);
            this.handleFile = this.handleFile.bind(this);
            this.handleFormRender = this.handleFormRender.bind(this);
            this.handlePrivate = this.handlePrivate.bind(this);
            this.renderErrorsTitle = this.renderErrorsTitle.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
            this.handleCancel = this.handleCancel.bind(this);
        }

        handleCancel(e){
            e.preventDefault();
            if (confirm('Are you sure you want to stop your upload? Any unsaved changes will be lost.')) {
                this.setState({track_file: null, errorsTitle:[]});
            } else {
                return ;
            }
        }

        handlePrivate(value){
             return () => this.setState({ private: Boolean(value) });
        }

        handleInput(field){
            return (e) =>  this.setState({[field]: e.target.value });
        }

        handleFile(e){
            // debugger
            e.preventDefault();
            const track = e.target.files[0];
            this.setState({track_file: track, title: track.name});
            
        }

        handleUpload(e){
                e.preventDefault();
                // debugger
                const formData = new FormData();
                if (this.state.title.length === 0){
                    this.setState({errorsTitle: ['Enter a title.']});
                } else {
                    formData.append('track[title]', this.state.title);
                }
                formData.append('track[private]', this.state.private);
                formData.append('track[genre]', this.state.genre);
                formData.append('track[tags]', this.state.tags);
                formData.append('track[description]', this.state.description);
                formData.append('track[track_file]', this.state.track_file);
                formData.append('track[photo]', this.state.photo);
                formData.append('track[uploader_id]', this.props.currentUser.id);
                this.props.upload(formData);
        }

        renderErrorsTitle() {
            return (
                <ul>
                    {this.state.errorsTitle.map((error, i) => (
                        <li className='errors errors-upload' key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } 

        // parseFileName(){

        // }

        // handleDragEnter(e){
        //     e.preventDefault();
        //     this.props.openModal('drop');
        // }

        handleFormRender(){
            if (!this.state.track_file) {

                return (

                <>
                <main className="main-page-container initial-form">

                

                <CreatorsNav className='creator-nav' profile_url={this.props.currentUser.profile_url}/>

                <section className='background-image-container initial-form'>

                <div className='upload-form-container'>


                    <form className="upload-form" >
                    <h1 className='title'>Drag and drop your tracks & albums here</h1 >

                    <label className='submit-button drag-button'>
                        or choose files to upload
                        <input className="label-input" type='file' draggable='true' onDrop={this.handleFile} onDragExit={e => e.preventDefault()} onDragEnter={e => e.preventDefault()} onDragOver={e => e.preventDefault()} onChange={this.handleFile} /> 
                    </label>
                    
                    <label  htmlFor="privacy">
                        Privacy:
                    <input form='' className='radio' type="radio" name="private" checked={this.state.private ? '' : 'checked'} onChange={this.handlePrivate(false)} value="Public" />
                    <span>Public</span>
                    <input form='' className='radio' type="radio" name="private" checked={this.state.private ? 'checked' : ''} onChange={this.handlePrivate(true)} value="Private" />
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
                const errorStyleTitle = this.state.errorsTitle[0] ? 'errors-input' : null
                return (
                    <>
                    <main className="main-page-container">

                    <CreatorsNav className='dropped-creator-nav' profile_url={this.props.currentUser.profile_url} />

                    <div className='form-parent-container'>

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

                    
                     <div className='upload-info'>

                        <div className="p-bar-container">
                            <p >{this.state.track_file.name}</p>
                            <p >Ready. Click Save to post this track.</p>
                        </div>
                        <div className="p-bar-container">
                            <p className='p-bar-left'></p>
                            <p className='p-bar-right'></p>
                        </div>

                    <form className="upload-form-container fill-in-form" onSubmit={this.handleUpload}>

                        <nav className='creator-nav-container basic-info-container'>
                            <ul className="tab-container basic-info" >
                                <span className="active-tab basic-info-tab">Basic info</span>
                            </ul>
                        </nav>

                        <section className='info-container upload-info-form'>

                            <div className='photo-container'>
                                <img className='photo' src={this.state.photo} />
                                <label className='drag-button replace-button' onDrop={this.handleFile} onDragEnter={e => e.preventDefault()} onDragLeave={e => e.preventDefault()} onChange={this.handleFile}>
                                    Upload Image
                                <input className="label-input" type='file' />
                                </label>

                            </div>

                            <label className='required-field form-field'>
                                <span> Title</span>
                            <input type="text" className={`field ${errorStyleTitle}`} value={this.state.title} onChange={this.handleInput('title')} placeholder="Name your track"/>
                            </label>
                            {this.renderErrorsTitle()}

                            <label className='required-field form-field'>
                                Genre
                             <input type="text" className='field' onChange={this.handleInput('genre')} placeholder="Genre" />
                            </label>

                            <label className='required-field form-field'>
                                Additional Tags
                            <input type="text" className='field' onChange={this.handleInput('tags')} placeholder="Add tags to describe the genre and mood of your track" />
                            </label>

                            <label className='required-field form-field'>
                                Description
                            <textarea onChange={this.handleInput('description')} className='required field' placeholder="Describe your track"></textarea>
                            </label>

                        <label id='privacy-label' htmlFor="privacy">
                            Privacy:
                        <label>
                        <input className='radio' type="radio" name="private" checked={this.state.private ? '' : 'checked'} onChange={this.handlePrivate(false)} value="Public" />
                         Public
                        <span>Anyone will be able to listen to this track</span>
                        </label>
                        <label>
                        <input className='radio' type="radio" name="private" checked={this.state.private ? 'checked' : ''} onChange={this.handlePrivate(true)} value="Private" />
                         Private
                        </label>
                        </label>
                            
                    
                        </section>

                            <div className='cancel-submit'>
                            <span className="asterisk">Required fields</span>
                            <div>
                            <input className="replace-button signup save-button" type="submit" value="Save"/>
                            <input form='' className="replace-button cancel-button" type="submit" value="Cancel" onClick={this.handleCancel} />
                            </div>
                  
                            </div>

                        <div className='terms-use terms-use-dropped upload-form-container'>
                            By uploading, you confirm that your sounds comply
                            with our Terms of Use and you don't infringe anyone else's rights.
                        </div>

                    </form>

                     </div>
           

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