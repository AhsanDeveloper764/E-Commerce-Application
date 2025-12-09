import React, { useState } from "react";
export const Test = () => {
  const data = [
    {
      title: "ahsan ali",
      number: "03181017031",
      Social: [
        {
          name: "google",
          link: "https://google.com/",
        },
        {
          name: "Yahoo",
          link: "https://Yahoo.com/",
        },
      ],
    },
  ];

  let [mega, setmega] = useState(data);
  
  
  return (
    <>
      <div>
        {mega.map((item, index) => {
          return (
            <>
              <div key={index}>
                <li>
                  <p>{item.title}</p>
                  {item.Social.map((itema, index) => {
                    return (
                      <>
                        <div key={index}>
                          <li>
                            <a href={itema.link}>{itema.name}</a>
                          </li>
                        </div>
                      </>
                    );
                  })}
                  <span>{item.number}</span>
                </li>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
