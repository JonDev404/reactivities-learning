using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Comments
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Comment, CommentDto>()
                .ForMember(d => d.Username, o => o.MapFrom(u => u.Author.UserName))
                .ForMember(d => d.DisplayName, o => o.MapFrom(u => u.Author.DisplayName))
                .ForMember(d => d.Image, o => o.MapFrom(u => u.Author.Photos.FirstOrDefault((p => p.IsMain)).Url));
        }
    }
}
