import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rayons: [
        {
          nom_rayon: "Épicerie salée",
          image: "/img/vignette-epices.jpg",
          lien_bbd: "rayons/epicerie_salee"
        },
        {
          nom_rayon: "Viande, poissons, œufs",
          image: "/img/vignette-viande.jpg",
          lien_bbd: "rayons/viande"
        },
        {
          nom_rayon: "Fruits et légumes",
          image: "/img/vignette-choufleur.jpg",
          lien_bbd: "rayons/fruits_et_legumes"
        },
        {
          nom_rayon: "Cosmétiques",
          image: "/img/vignette-hygiene.jpg",
          lien_bbd: "rayons/cosmetiques"
        },
        {
          nom_rayon: "Entretien de la maison",
          image: "/img/vignette-maison.jpg",
          lien_bbd: "rayons/entretien_de_la_maison"
        },
        {
          nom_rayon: "Boissons",
          image: "/img/vignette-vin.jpg",
          lien_bbd: "rayons/boissons"
        },
        {
          nom_rayon: "Boulangerie-pâtisserie",
          image: "/img/vignette-pain.jpg",
          lien_bbd: "/rayons/boulangerie"
        },
        {
          nom_rayon: "Produits laitiers",
          image: "/img/vignette-yaourt.jpg",
          lien_bbd: "rayons/produits_laitiers"
        },
        {
          nom_rayon: "Épicerie sucrée",
          image: "/img/vignette-chocolat.jpg",
          lien_bbd: "rayons/epicerie_sucree"
        },
        {
          nom_rayon: "Fleurs",
          image: "/img/vignette-fleurs.jpg",
          lien_bbd: "rayons/fleurs"
        },
      ],
    };
  }

  render() {
    return (
      <main className="container">
        <div className="rubrique">
          <h3>Qui sommes-nous ?</h3>
          <p>
            <strong>Merci Babeth !</strong> C’est l’histoire d’une habitante de
            Sainte-Elisabeth au Blosne, à Rennes, souhaitant dynamiser la vie de
            son cher et tendre quartier. Le tout en privilégiant <strong>un mode de vie sain</strong> et un <strong>mode de consommation durable</strong> et éco-responsable... <a id="plus" href="/qui">En savoir <FontAwesomeIcon icon={faPlus} /></a></p>
        </div>
        <div className="rubrique">
          <h3>Nos produits</h3>
          <div className="d-flex justify-content-center flex-wrap">
            {this.state.rayons.map((rayon) => (
              <div className="blocRayon">
                <a href={rayon.lien_bbd}>
                  <img className="imageRayon" src={rayon.image}></img>
                  <p className="nomRayon">{rayon.nom_rayon}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="rubrique">
          <h3>
            <a id="adherer" href="/adherer">
              Adhérer à l'association <FontAwesomeIcon icon={faSignInAlt} />
            </a>
          </h3>
          <h4>Déjà adhérent ?</h4>
          <Form>
            <Form.Group>
              <Form.Text className="text-muted">
                Les champs marqués d'un * sont obligatoires.
              </Form.Text>
              <Form.Control type="text" placeholder="Login *" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Mot de passe *"
                required
              />
              <Form.Text className="text-muted">
                <a href="/oubli">Mot de passe oublié ?</a>
              </Form.Text>
            </Form.Group>
            <Button className="submitButton" type="submit">
              Me connecter <FontAwesomeIcon icon={faSignInAlt} />
            </Button>
          </Form>
        </div>
      </main>
    );
  }
}

export default Home;
