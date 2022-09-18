import React from "react";
// components
import Header from "../components/oorganism/Header";
import PopulerForYou from "../components/oorganism/PopulerForYou";
import NewRecipe from "../components/oorganism/NewRecipe";
import PopulerRecipe from "../components/oorganism/PopulerRecipe";
import { connect } from "react-redux";

function Home(props) {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Populer for you */}
      <section>
        <PopulerForYou />
      </section>
      {/* New recipe */}
      <section>
        <NewRecipe />
      </section>
      <section>
        <PopulerRecipe />
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  authData: state?.auth,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
