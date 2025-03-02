import { render, screen } from '@testing-library/react'
import { YouTubeEmbed } from './YouTubeEmbed'

describe('<YouTubeEmbed/>', () => {
  it('renders the video and title', () => {
    render(
      <YouTubeEmbed
        videoTitle="the title of the video"
        videoUrl="https://example.com/video"
      />,
    )

    expect(screen.getByText('the title of the video'))
    expect(screen.getByTitle('YouTube embed')).toBeInTheDocument()
  })

  it('does not render title when none is given', () => {
    render(<YouTubeEmbed videoUrl="https://example.com/video" />)

    expect(screen.getByTitle('YouTube embed')).toBeInTheDocument()
    expect(screen.queryByTestId('videoTitle')).not.toBeInTheDocument()
  })
})
