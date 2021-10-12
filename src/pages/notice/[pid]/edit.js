import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getToken from "utils/getToken";
import Edit from "../../../components/Write/Edit";

class Api {
  constructor(pid) {
    this.token = getToken();
    this.pid = pid;
  }

  async getPost() {
    const response = await axios.get(`http://3.36.72.145:8080/api/board/notice/${this.pid}`);
    return response.data.board;
  }
  async putPost(title, description) {
    await axios.put(`http://3.36.72.145:8080/api/board/notice/${this.pid}`, {
      title, description
    }, {
      headers: {
        "x-auth-token": this.token
      }
    });
    return;
  }
}

function Write() {
  return <Edit category="notice" />;
}

export default Write;
