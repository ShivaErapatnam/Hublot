using Sitecore.LayoutService.Configuration;
using Newtonsoft.Json.Linq;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using System.Collections.Generic;
using System.Linq;
using Sitecore.Data.Fields;

namespace XmCloudSXAStarter.Resolvers
{
    public class FooterNavigationResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            //  var contextItem = pipelineArgs.ContextItem;
            Item dataSourceItem = this.GetContextItem(rendering, renderingConfig);

            if (dataSourceItem == null)
            {
                return null;
            }

            var logoImage = dataSourceItem.Fields["Logo"];
            var navItems = new List<object>();

            foreach (Item child in dataSourceItem.Children)
            {
                LinkField linkField = child.Fields["Link"];
              
                navItems.Add(new
                {
                    linkText = child.Fields["LinkText"]?.Value,
                   
                    link = linkField.GetFriendlyUrl()
            }); ;
            }

            return new
            {
                Logo = new
                {
                    src = Sitecore.Resources.Media.MediaManager.GetMediaUrl(((Sitecore.Data.Fields.ImageField)logoImage).MediaItem),
                    alt = ((Sitecore.Data.Fields.ImageField)logoImage).Alt
                },
                Navigation = navItems
            };
        }
    }
}
