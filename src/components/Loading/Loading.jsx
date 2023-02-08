import React from 'react'

import { Skeleton } from '@mui/material'
import { Container } from "@mui/system"

export default function Loading() {
  return (
    <Container maxWidth="xxl">
        <Skeleton variant="rounded" width="100%" height={150} />
        <Skeleton variant="text" width="100%" height={150} />
        <Skeleton variant="rounded" width="100%" height={150} />
        <Skeleton variant="text" width="100%" height={150} />
        <Skeleton variant="rounded" width="100%" height={150} />
    </Container>
  )
}
