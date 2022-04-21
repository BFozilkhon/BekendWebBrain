import React from "react";

export const Swager = () => {
  return (
    <div className="accordion my-4" id="accordionPanelsStayOpenExample">
      <div className="accordion-item  my-2">
        <h2 className="accordion-header " id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            style={{ background: "#e7f1ff" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <button className="btn btn-primary m-0" style={{ width: 150 }}>
              GET
            </button>
            <h5 className="mx-5">/api/travel</h5>
            <h4 className="mx-auto">All News</h4>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body">
            <strong>
              Bu apini Bekenddagi bor hamma malumotlarni olish uchun ishlatamiz.
            </strong>{" "}
            Uning uchun biz fetch yoki axiosdan foydalanamiz.
            <strong>Base URL: </strong>
            <code>https://travels-book.herokuapp.com</code>.Hamma malumotlarni
            olmoqchi bo`lsak <i>base urlga</i> tepadagi routerni qoshamiz.
            <strong>All data Fetching: </strong>
            <code>fetch('https://travels-book.herokuapp.com/api/travel')</code>
          </div>
        </div>
      </div>
      <div className="accordion-item  my-2">
        <h2 className="accordion-header " id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            style={{ background: "#e7f1ff" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOnes"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOnes"
          >
            <button className="btn btn-primary m-0" style={{ width: 150 }}>
              GET
            </button>
            <h5 className="mx-5">/api/travel/search/:text</h5>
            <h4 className="mx-1">Search News</h4>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOnes"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOnes"
        >
          <div className="accordion-body">
            <strong>
              Bu apini Bekenddagi malumotlarni search yani qidirish uchun ishlatamiz.
            </strong>{" "}
            Uning uchun biz fetch yoki axiosdan foydalanamiz.
            <strong>Base URL: </strong>
            <code>https://travels-book.herokuapp.com</code>.Bekendga get sorovini yuborish uchun 
            <strong>All data Fetching: </strong>
            <code>fetch('https://travels-book.herokuapp.com/api/travel/search/$text')</code>
          </div>
        </div>
      </div>
      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            style={{ background: "#e7f1ff" }}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <button className="btn btn-primary m-0" style={{ width: 150 }}>
              GET
            </button>
            <h5 className="mx-5">/api/travel:id</h5>
            <h4 className="mx-auto">One News</h4>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body">
            <strong>
              Bu apini Bekenddagi bitta datani tutib olish uchun ishlatamiz.
            </strong>{" "}
            Uning uchun biz fetch yoki axiosdan foydalanamiz.
            <strong>Base URL: </strong>
            <code>https://travels-book.herokuapp.com</code>.Bitta News ga
            tegishli malumotlarni olmoqchi bolsak <i>ID</i> jonatishimiz
            kerak.Chunki bekendda idga moslab sort qiladi. <i>base urlga</i>{" "}
            tepadagi routerni qoshamiz.
            <strong>All data Fetching: </strong>
            <code>
              fetch(`https://travels-book.herokuapp.com/api/travel/$id`)
            </code>
          </div>
        </div>
      </div>
      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button  collapsed "
            style={{ background: "#cff4fc" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            <button
              className="btn  m-0 text-light"
              style={{ width: 150, background: "green" }}
            >
              POST
            </button>
            <h5 className="mx-5">/api/travel/add</h5>
            <h4 className="mx-auto">Add News</h4>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div className="accordion-body">
            <strong>Bu api yengi malumot qoshish uchun ishlatilinadi.</strong>
            .Malumot qoshish uchun bekendga post sorovi yuboriladi va qoshimcha
            ravishda{" "}
            <code>title:'WebBrain', descr:"IT school", img: "url"</code>{" "}
            korinishida object yuborish kerak boladi.Budan foydalanish uchun
            base url + tepadagi router qoyiladi.
            <strong>Add Data Fetching: </strong>{" "}
            <code>
              fetch('https://travels-book.herokuapp.com/api/travel/add')
            </code>
          </div>
        </div>
      </div>
      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
          <button
            className="accordion-button  collapsed "
            type="button"
            style={{ background: "#fff3cd" }}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            <button
              className="btn m-0 text-light"
              style={{ width: 150, background: "#d6a12d" }}
            >
              PUT
            </button>
            <h5 className="mx-5">/api/travel:id</h5>
            <h4 className="mx-auto">Update News</h4>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFour"
        >
          <div className="accordion-body">
            <strong>
              Bu apidan datani update yani tahrirlashda ishlatishimiz mumkin
            </strong>
            .Uning uchun biz data idsini bekendga berib yuborishimiz kerak.Base
            urlga + router + id ni qoshib jonatamiz.
            <strong>Updating fetch data</strong>{" "}
            <code>
              fetch(`https://travels-book.herokuapp.com/api/travel:$id``)
            </code>
            .Va qoshicha ravishda nimani o`zgartirmoqchi bolsak obyekt
            korinishida yuborishimiz kerak boladi{" "}
            <code>
              title: 'Phone', desrc: 'This is very beautiful', img: 'url'
            </code>
            .
          </div>
        </div>
      </div>
      <div className="accordion-item my-2">
        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
          <button
            className="accordion-button  collapsed "
            type="button"
            style={{ background: "#f8d7da" }}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            <button className="btn btn-danger m-0" style={{ width: 150 }}>
              Delete
            </button>
            <h5 className="mx-5">/api/travel:id</h5>
            <h4 className="mx-auto">Delete News</h4>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingFive"
        >
          <div className="accordion-body">
            <strong>Bu api orqali data ni ochirib yuborishimiz mumkin</strong>
            .Bunga faqatgina ochirib yubormoqchi bolgan datamizning id sini
            berib yuboramiz.<strong>Deleting Data: </strong>{" "}
            <code>
              fetch(`https://travels-book.herokuapp.com/api/travel/$id`)
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swager;
