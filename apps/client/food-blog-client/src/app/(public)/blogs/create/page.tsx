import React from 'react';

const page = () => {
  return (
    <div>
      <h1>Create a Blog Post</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Content:
          <textarea name="content"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
