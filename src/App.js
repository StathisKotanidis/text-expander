import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 9,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
}) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }

  let collapsedText = function getCollapsedText(children, collapsedNumWords) {
    if (collapsedNumWords === 0) {
      return children;
    }

    const arrayOfStrings = children.split(" ");
    const finalArray = [];
    for (let i = 0; i <= collapsedNumWords; i++) {
      finalArray.push(arrayOfStrings[i]);
    }

    return finalArray.join(" ") + "...";
  };

  let expandedText = function getExpandedText(children, collapsedNumWords) {
    const arrayOfStrings = children.split(" ");
    let finalArray = [];
    finalArray = arrayOfStrings.slice(0, arrayOfStrings.length);

    return finalArray.join(" ");
  };

  return (
    <div className="box">
      <p>
        {toggle
          ? collapsedText(children, collapsedNumWords)
          : expandedText(children, collapsedNumWords)}
      </p>

      <span
        onClick={handleToggle}
        className="expand-text"
        style={{ color: buttonColor }}
      >
        {toggle ? expandButtonText : collapseButtonText}
      </span>
    </div>
  );
}
