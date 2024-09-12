import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { FaFilePdf, FaTrashAlt } from 'react-icons/fa';

const Report = () => {
  const reports = [
    { id: 1, name: 'Report 1', date: '2024-08-01', status: 'Completed' },
    { id: 2, name: 'Report 2', date: '2024-08-03', status: 'Pending' },
    { id: 3, name: 'Report 3', date: '2024-08-05', status: 'Completed' },
  ];

  const handleDownload = (id) => {
    // Logic to handle report download
    console.log(`Download report with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic to handle report deletion
    console.log(`Delete report with id: ${id}`);
  };

  return (
    <Container className="py-5">
      <Col className='bg-white p-4'>
        <Row className="mb-4">
            <Col>
            <h1 className="text-center">My Reports</h1>
            <p className="text-center text-muted">View and manage your reports</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <Card className="shadow-sm border-0">
                <Card.Body>
                <Table responsive className="table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Report Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.name}</td>
                        <td>{report.date}</td>
                        <td>{report.status}</td>
                        <td>
                            <Button
                            variant="outline-primary"
                            className="mr-2"
                            onClick={() => handleDownload(report.id)}
                            >
                            <FaFilePdf /> Download
                            </Button>
                            <Button
                            variant="outline-danger"
                            onClick={() => handleDelete(report.id)}
                            >
                            <FaTrashAlt /> Delete
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
            </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Report;
