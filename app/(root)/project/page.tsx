"use client"

import { projects } from '@/constant';
import { Table } from '@mantine/core'

const page = () => {
  const rows = projects.map((project) => (
    <Table.Tr key={project.id}>
      <Table.Td>{project.name}</Table.Td>
      <Table.Td>{project.techStack}</Table.Td>
      <Table.Td>{project.description}</Table.Td>
    </Table.Tr>
  ));
  return (
    
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Tech Stack</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export default page