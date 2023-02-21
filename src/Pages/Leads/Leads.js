import React, { useEffect, useRef, useState } from "react";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState([]);
  const [sid1, setSid1] = useState([]);
  let sid = [];
  const ref = useRef(null);
  const [source, setSource] = useState([]);
  const [assign, setAssign] = useState([]);
  const [search, setSearch] = useState("");
  let setData = [];
  let setData1 = [];
  let setData2 = [];
  const url = `http://crm.softvalley.sveducrm.com/api/admin/lead/list?page=1&limit=20`;
  const url4 = `http://crm.softvalley.sveducrm.com/api/admin/lead/list?page=1&limit=10`;
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("Save token")}`,
      },
      body: {
        search: "",
        lead_status_id: [],
        source_id: [],
        user_id: [],
        contacted_date_from: "2023-02-07T18:00:00.000Z",
        contacted_date_to: "2023-02-07T18:00:00.000Z",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLeads(data?.data?.data);
        // setSid1(data?.data?.data);
        console.log(data?.data?.data);
      });
  }, []);
  useEffect(() => {
    const url1 = `http://crm.softvalley.sveducrm.com/api/admin/base/lead-status
      `;
    fetch(url1, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Save token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data?.data);
      });
  }, []);
  useEffect(() => {
    const url2 = `http://crm.softvalley.sveducrm.com/api/admin/base/source
      `;
    fetch(url2, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Save token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSource(data?.data);
        // console.log(source);
      });
  }, []);
  useEffect(() => {
    const url3 = `http://crm.softvalley.sveducrm.com/api/admin/base/assignee
      `;
    fetch(url3, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Save token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAssign(data?.data);
        // console.log(data);
      });
  }, []);

  const statu = (e) => {
    const st = leads.filter(
      (d) => parseInt(e.target.value) === d?.lead_status_id
    );
    st.map((d) => setData.push(d?.lead_status_id));
    console.log(st);
  };
  const statu1 = (e) => {
    const st1 = leads.filter((d) => parseInt(e.target.value) === d?.source_id);
    // setSid1(st1);
    st1.map((d) => setData1.push(d?.source_id));
    console.log(st1);
  };
  const statu2 = (e) => {
    console.log(parseInt(e.target.value));
    leads.map((lead) => lead?.lead_assignees.map((a) => sid.push(a)));
    // console.log(sid);
    // sid.filter;
    const st2 = sid.filter((d) => parseInt(e.target.value) === d?.user_id);

    st2.map((d) => setData2.push(d?.user_id));
    console.log(setData2);
  };
  async function getResponse(form) {
    console.log(form);
    await fetch(url4, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("Save token")}`,
      },

      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data?.data);
        // console.log(data?.data?.data);
        // setLeads(data?.data);
        if (data?.data?.data.length) {
          console.log(data?.data?.data);
          setLeads(data?.data?.data);
        }

        // console.log(leads);
      });
  }

  const formData = (e) => {
    e.preventDefault();

    const form = {
      search: search,
      lead_status_id: setData,
      source_id: setData1,
      user_id: setData2,
      contacted_date_from: "",
      contacted_date_to: "",
    };

    console.log(setData, setData1, setData2);
    console.log(form);

    getResponse(form);
  };
  const reset = () => {
    ref.selected.value = "";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("Save token")}`,
      },
      body: {
        search: "",
        lead_status_id: [],
        source_id: [],
        user_id: [],
        contacted_date_from: "2023-02-07T18:00:00.000Z",
        contacted_date_to: "2023-02-07T18:00:00.000Z",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLeads(data?.data?.data);
      });
  };
  // console.log(source, status, assign);
  return (
    <div>
      <div className="w-10/12 mx-auto mb-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Leads</h2>
            <h2 className="text-lg font-semibold">
              Difficulties increase the nearer we get to the goal
            </h2>
          </div>

          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://st1.bollywoodlife.com/wp-content/uploads/2021/02/Aamir-Khan1.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <input
          className="input input-bordered border-accent"
          type="text"
          placeholder="Input Here..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <form onSubmit={formData}>
          <select onChange={statu} ref={ref} className="select w-full max-w-xs">
            <option value="" disabled selected>
              Please select One
            </option>

            {source?.map((option) => (
              <option value={option?.id}>{option?.name}</option>
            ))}
          </select>
          <select onChange={statu1} className="select w-full max-w-xs">
            <option value="" disabled selected>
              Please select One
            </option>

            {status?.map((option) => (
              <option value={option?.id}>{option?.name}</option>
            ))}
          </select>
          <select onChange={statu2} className="select w-full max-w-xs">
            <option value="" disabled selected>
              Please select One
            </option>

            {assign?.map((option) => (
              <option value={option?.user_id}>{option?.name}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit{" "}
          </button>
          <button type="reset" className="btn bg-red-500" onClick={reset}>
            Reset
          </button>
        </form>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th> ID</th>

              <th>source</th>
              <th>status</th>
              <th>assigned</th>
            </tr>
          </thead>
          <tbody>
            {leads?.map((lead, i) => (
              <tr className="hover">
                <th className="text-lg font-bold text-red-900">{i + 1}</th>
                <td className="text-lg font-semibold">{lead?.name}</td>
                <td className="text-md font-bold">{lead?.phone}</td>
                <td className="text-md font-semibold text-blue-900">
                  {lead?.email}
                </td>
                <td className="text-md font-semibold text-red-900">
                  {lead?.country?.name}
                </td>
                <td>{lead?.id}</td>
                <td className="text-md font-semibold text-red-900">
                  {lead?.source?.name}
                </td>
                <td className="text-md font-semibold text-red-900">
                  {lead?.lead_status?.name}
                </td>
                {/* <td>{lead?.lead_assignees.length}</td> */}
                <td className="text-md font-semibold text-red-900 ">
                  {lead?.lead_assignees.map((a, i) => (
                    <h1>{a?.name} </h1>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th>User ID</th>
              <th>assigned</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Leads;
