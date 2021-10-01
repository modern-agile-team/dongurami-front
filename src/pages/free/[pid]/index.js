import axios from "axios";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header";
import PostContainer from "components/Post/PostContainer";
import Post from "../../../components/Post/Post";

class Api {
  constructor(pid, token, setPost, category) {
    this.pid = pid;
    this.token = token;
    this.setPost = setPost
    this.category = category;
  }

  async updatePost() {
    const post = await this.getPost();
    this.setPost(post);
  }

  async getPost() {
    const response = await axios.get(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}`);
    return response.data;
  }
  async deletePost() {
    await axios.delete(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}`, {
      headers: {
        'x-auth-token': this.token
      }
    });
  }
  async postComment(description, cid, pcid) {
    if (cid !== pcid) {
      await this.postReplyComment(...arguments);
    } else {
      await axios.post(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}`, {
          id: 'test1', description
        }, {
          headers: {
            'x-auth-token': this.token
          }
      });
    }
    this.updatePost();
  }
  async putComment(description, cid, pcid) {
    if (cid !== pcid) {
      await this.putReplyComment(...arguments);
    } else {
      await axios.put(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}/${cid}`, {
          description
        }, {
          headers: {
            'x-auth-token': this.token
          }
      });
    }
    this.updatePost();
  }
  async deleteComment(cid, pcid) {
    if (cid !== pcid) {
      await this.deleteReplyComment(...arguments);
    } else {
      await axios.delete(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}/${cid}`, {
        headers: {
          "x-auth-token": this.token
        }
      });
    }
    this.updatePost();
  }

  async postReplyComment(description, pcid) {
    await axios.post(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}/${pcid}`, {
      id: 'test1', description
    }, {
      headers: {
        'x-auth-token': this.token
      }
    });
  }
  async putReplyComment (description, cid, pcid) {
    await axios.put(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}/${pcid}/${cid}`, {
      description
    }, {
      headers: {
        'x-auth-token': this.token
      }
    });
  }
  async deleteReplyComment (cid, pcid) {
    await axios.delete(`http://3.36.72.145:8080/api/board/${this.category}/${this.pid}/${pcid}/${cid}`, {
      headers: {
        'x-auth-token': this.token
      }
    });
  }
}

function FreePost() {
  return (
    <>
      <Header />
      <PostContainer category="free" Api={Api} />
      <Footer />
    </>
  );
}

export default FreePost;
