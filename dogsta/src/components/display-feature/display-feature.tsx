import { State, Component, Prop, Method, h } from '@stencil/core';

@Component({
  tag: 'display-feature',
  styleUrl: 'display-feature.css',
  shadow: true,
})
export class DisplayFeature {
  @Prop() img = new Image();          // HTML Image element
  @State() jsonResponse: string;      // jsonResponse
  @Prop() responseImgUrl: string;     // image URL from Dog API
  @Prop() count = 30;                 // grabbing 30 breeds
  @Prop() message: string;           
  @Prop() status: string;
  @Prop() dog: string;                // list of each dog breed

  componentWillLoad() { 
    /**
     * Setting up fetch response from Dog API and getting the list of breeds
     * when DOM first loads
     */
    let url = `https://dog.ceo/api/breeds/list/all?per_page=${this.count}`;
    try{
      fetch(url).then(response => {
        response.json().then(json => {
          this.jsonResponse = json.message;
          this.status = json.status;
        });   
      });
  }
  catch(e){
    console.log('Error while fetching breeds list from Dog API');
  }
  }

  @Method()
   async getImage(selectedBreed){
     /**
      * Name: getImage
      * Purpose: fetching an image of dog's breed from API and displaying it on the same document 
      * Parameters: selectedBreed -breed name which is selected
      * Return: none
      */
     try{
       var imageUrl= "https://dog.ceo/api/breed/" + selectedBreed +"/images/random";
       fetch(imageUrl).then(response => {
          response.json().then(json => {
            this.responseImgUrl = json.message;
            this.img.src = json.message;
            document.body.appendChild(this.img);
          });
        });
     }
     catch(e){
      console.log('Error while fetching Image of '+ selectedBreed+' Dog API');
    }
  }

  handleChange = (e) => {
      /**
      * Name: handleChange
      * Purpose: whenever an option from dropdown menu is selected
      *           handleChange will trigger because onChange event listener
      * Parameters: e - event : to find out the value of selected option
      * Return: none
      */
    var selectedBreed = e.target.value;
    this.getImage(selectedBreed);
  }

  render() {
    /**
     * Rendering the dropdown menu and detecting if any option from there is selected
     * if the status=="success"
     * This status is dependent on componentWillLoad(); whether it fetches the list of breed successfully or not
     */
    return(
      <div class="display-feature">
         <h6>Choose a breed below</h6>
        <p> 
        <select onChange={this.handleChange}>
          {
            this.status=="success"? // conditional rendering of dropdown menu which's options are dependent on dop API
            Object.keys(this.jsonResponse).map((dog) => {
            return (<option value={dog} onChange={()=>this.handleChange(dog)}>{dog}</option>);
            }) : "Error in fetching breed list from dog API" 
          } 
        </select>
       </p>
     </div>
    );
}
}
