import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./admin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Admin extends Component {
  render() {
    return (
      <main className="container">
        <h3 id="lienRayons">
          <a href="/rayons">Accéder au catalogue des produits</a>
        </h3>
        <h3>Ajouter un produit</h3>
        <Form>
          <Form.Group>
            <Form.Text className="text-muted">
              Les champs marqués d'un * sont obligatoires.
            </Form.Text>
            <Form.Label>Nom du produit *</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nom du producteur *</Form.Label>
            <Form.Control as="select" custom required>
              <option selected="true" disabled="disabled" value="">
                -- Sélectionnez votre nom dans la liste --
              </option>
              <option>Farid Agri</option>
              <option>Sami Botté</option>
              <option>Jacqueline Conserve</option>
              <option>Henri Farine</option>
              <option>Léa Hortensia</option>
              <option>Michel Jardinier</option>
              <option>Hélène Présure</option>
              <option>Julie Récure</option>
              <option>Jean Sucre</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description *</Form.Label>
            <Form.Control as="textarea" rows={4} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Prix *</Form.Label>
            <Form.Control type="number" step="0.01" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Catégorie *</Form.Label>
            <Form.Control as="select" custom required>
              <option selected="true" disabled="disabled" value="">
                -- Choisissez la catégorie de votre article --
              </option>
              <option>epicerie_salee</option>
              <option>viande</option>
              <option>fruits_et_legumes</option>
              <option>cosmetiques</option>
              <option>entretien_de_la_maison</option>
              <option>boissons</option>
              <option>boulangerie</option>
              <option>produits_laitiers</option>
              <option>epicerie_sucree</option>
              <option>fleurs</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Vous ne trouvez pas votre bonheur ? Choisissez la catégorie la
              plus proche !
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Référence</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre de produits en stock</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Unité</Form.Label>
            <Form.Control as="select">
              <option>pièce</option>
              <option>kg</option>
              <option>g</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>TVA</Form.Label>
            <Form.Control as="select">
              <option>5.5</option>
              <option>20</option>
            </Form.Control>
          </Form.Group>
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Ajouter une photo *</Form.File.Label>
            <Form.File.Input required />
          </Form.File>
          <Form.Group>
            <Form.Check inline label="Publié" checked></Form.Check>
            <Form.Check inline label="Mis en avant"></Form.Check>
          </Form.Group>
          <Button className="boutonFormulaire" type="submit">Ajouter</Button>
        </Form>
      </main>
    );
  }
}

export default Admin;
