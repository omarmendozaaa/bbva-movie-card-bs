import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaMovieCardBs-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-movie-card-bs></bbva-movie-card-bs>
```

##styling-doc

@customElement bbva-movie-card-bs
*/
export class BbvaMovieCardBs extends LitElement {
  static get is() {
    return 'bbva-movie-card-bs';
  }
  getData(data) {
    this.movie = data;
  }
  // Declare properties
  static get properties() {
    return {
      movie: { type: Object },
      isextended: { type: Boolean },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.isextended = false;
    this.base_url = 'https://image.tmdb.org/t/p/original';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-movie-card-bs-shared-styles'),
    ];
  }
  _movieEvent(item) {
    this.dispatchEvent(
      new CustomEvent('id-movie-event', {
        bubbles: true,
        composed: true,
        detail: item
      })
    );
  }
  // Define a template
  render() {
    return html` ${this.isextended
      ? html`
          <div class="mb-3">
            <div class="card-body">
              <div class="row g-0">
                <div class="col-md-2 text-center align-self-center">
                  <img
                    src="${this.base_url}${this.movie.poster_path}"
                    class="img-fluid rounded"
                    style="width: 90%"
                    alt="${this.movie.title}"
                    @click=${() => this._movieEvent(this.movie.id)}
                  />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title" @click=${() => this._movieEvent(this.movie.id)}>${this.movie.title}</h5>
                    <p class="card-text">${this.movie.overview}</p>
                    <p class="card-text">
                    <small class="text-muted"
                        >${this.movie.release_date}</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      : html`
      <div class="card h-100">
        <img src="${this.base_url}${this.movie.poster_path}" class="card-img-top" alt="${this.movie.title}" @click=${() => this._movieEvent(this.movie.id)}>
        <div class="card-body">
          <p class="fw-bold" @click=${() => this._movieEvent(this.movie.id)}>${this.movie.title}</p>
          <p class="card-text">
          <small class="text-muted">${this.movie.release_date}</small>
        </p>
        </div>
      </div>
    `}`;
  }
}
